import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import { Container, Divider, Group, Image, List, Mark, Text, Title, TitleOrder, createStyles } from '@mantine/core'
import BlogContainer from '../../components/BlogContainer/BlogContainer'
import rehypeSlug from 'rehype-slug'
import { TableOfContents } from '../../components/TableOfContents/TableOfContents'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Prism } from '@mantine/prism'

import './prismaConf'


interface Headings {
    label: string;
    link: string;
    order: number;
}

// getHeadings credit: Josh W. Comeau
export async function getHeadings(source: string)  {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^###*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "");
    const id = text.toLowerCase().replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replaceAll(" ", "-")
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = raw.slice(0, 3) === "###" ? 3 : 2;

     const value: Headings = { label: text, link: `#${id}`, order: level };
     return value
  });
}

interface CustomHProps {
  id : string,
  order : TitleOrder,
  rest: Map<any, any> 
}

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

const CustomH = ({ id, order, ...rest } : CustomHProps) => {
  const { classes } = useStyle()()
  if (id) {
    return (
      <Group>
        <Link href={`#${id}`}>
        <Title className={classes.link} pb='sm' pt='lg' id={id} order={order} {...rest} />
         </Link>
      </Group>
    );
  }
  return <Title order={order} {...rest} />;
}

const CustomH1 = (props: any) => {
  return <CustomH {...props} order={1} />
};

const CustomH2 = (props: any) => {
  return <CustomH {...props} order={2} />
};

const CustomH3 = (props: any) => {
  return <CustomH {...props} order={3} />
};

const CustomH4 = (props: any) => {
  return <CustomH {...props} order={4} />
};

const CustomH5 = (props: any) => {
  return <CustomH {...props} order={5} />
};

const CustomH6 = (props: any) => {
  return <CustomH {...props} order={6} />
};

const components = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  Prism: Prism,
  Mark: Mark
};

interface PostPageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>,
  frontMatter: {
    title: string,
    description: string,
    author: string,
    date: number,
    tags: string[],
    image: string
  },
  headings: Headings[]
}

export default function PostPage({ source, frontMatter, headings } : PostPageProps) {
  const router = useRouter()
  const [active, setActive] = useState<string>("")
  useEffect(() => {
    setActive(window.location.hash)
    router.events.on('hashChangeComplete', (url) => {
      setActive(window.location.hash)
    });
  }, []);



  const { classes } = useStyle()()
  return (
    <BlogContainer
      navigation={
        <TableOfContents links={headings} active={active} />
      }
      backLink='/blog'
      title='Back to All Post'
      className={classes.link}
    >
      <Container maw={800}>
        <Title order={1} className={classes.title}>
          {frontMatter.title}
        </Title>
        {frontMatter.description && (
          <Text py='xl' color='dimmed'>
            {frontMatter.description}
          </Text>
        )}
        <Divider p="xl">  </Divider>
        <Image src={frontMatter.image}/>
        <MDXRemote components={components} {...source} />
      </Container>
    </BlogContainer>
  )
}

export const getStaticProps = async ({ params } : any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  const headings = await getHeadings(content);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      headings
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}