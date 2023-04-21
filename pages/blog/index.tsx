import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import { Container, SimpleGrid } from '@mantine/core'
import { TagBox } from '../../components/TagBox/TagBox'
import { useState } from 'react'
import { ImageCard } from '../../components/Card/ImageCard'
import BlogContainer from '../../components/BlogContainer/BlogContainer'

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
        post.data.tags.forEach((tag: string) =>{
            tags.add(tag)
        })
    })

    
    return (
        <BlogContainer
            navigation={
                <TagBox tags={Array.from(tags)} filter={(tags) => {
                    if (tags.length == 0) {
                        setFilteredPost(posts)
                    } else {
                        setFilteredPost(posts.filter((post) => {
                            for(const tag of tags) {
                                if (post.data.tags.includes(tag)) {
                                    return true
                                }
                            }
                            return false
                        }))
                    }
                }}/>
            }
            backLink='/'
        >
            <Container>
                <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
                    {filteredPost?.map(item => {
                        return <ImageCard key={item.filePath} link={`/blog/${item.filePath.replaceAll('.mdx', '')}`} date={item.data.date} image={item.data.cover} title={item.data.title} />
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