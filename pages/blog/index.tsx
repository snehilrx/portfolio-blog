import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import { Container, createStyles, MediaQuery, SimpleGrid, Text, Title } from '@mantine/core'
import { TagBox } from '../../components/TagBox/TagBox'
import { useState } from 'react'
import { ImageCard } from '../../components/Card/ImageCard'
import BlogContainer from '../../components/BlogContainer/BlogContainer'

function useStyle() {
    return createStyles((theme) => ({
      link: {
          color: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 6 : 7],     
          ['&:hover'] : {
              textDecoration: 'wavy 2px underline'   
          }
      },
      title: {
          color: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 6 : 7],   
          fontWeight: 900,
          fontSize: '300%'  
      },
    }))
  }

interface IndexProps {
    posts: Post[]
}

interface Post {
    content: string;
    data: {
        [key: string]: any;
    };
    filePath: string;
}

export default function Blog({ posts }: IndexProps) {
    const tags = new Set<string>()
    const [filteredPost, setFilteredPost] = useState<Post[]>(posts)
    posts.forEach((post) => {
        post.data.tags.forEach((tag: string) => {
            tags.add(tag)
        })
    })

    const { classes } = useStyle()()
    return (
        <BlogContainer
            navigation={
                <Container>
                    <Text p='lg'>Tags</Text>
                    <TagBox tags={Array.from(tags)} filter={(tags) => {
                    if (tags.length == 0) {
                        setFilteredPost(posts)
                    } else {
                        setFilteredPost(posts.filter((post) => {
                            for (const tag of tags) {
                                if (post.data.tags.includes(tag)) {
                                    return true
                                }
                            }
                            return false
                        }))
                    }
                }} />
                </Container>
            }
            backLink='/'
            title='Home'
            className={classes.link}
        >
            <Container>
                <Title pb='lg'>Blog Posts</Title>
                <SimpleGrid cols={4}
                    spacing="lg"
                    breakpoints={[
                        { maxWidth: '72rem', cols: 3, spacing: 'md' },
                        { maxWidth: '56rem', cols: 2, spacing: 'sm' },
                        { maxWidth: '24rem', cols: 1, spacing: 'sm' },
                    ]}>
                    {filteredPost?.map(item => {
                        return <ImageCard key={item.filePath} link={`/blog/${item.filePath.replaceAll('.mdx', '')}`} date={item.data.date} image={item.data.image} title={item.data.title} />
                    })}
                </SimpleGrid>
            </Container>
        </BlogContainer>
    )
}

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
        const item = matter(source)
        const { content, data } = item
        return {
            content,
            data,
            filePath,
        }
    })

    return { props: { posts } }
}