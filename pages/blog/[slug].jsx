import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import { AppShell, Container, Flex, List, Navbar, Text, Title } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WithRipple from '../../ui/WithRipple'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BlogContainer from '../../components/BlogContainer/BlogContainer'
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle'
import rehypeSlug from 'rehype-slug'


// getHeadings credit: Josh W. Comeau
export async function getHeadings(source) {
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

    return { text, id, level };
  });
}

const TableOfContents = ({ headings }) => {
  return (
    <Container>
      <Title size='lg' pb='md'>Contents:</Title>
      <List spacing='lg' withPadding >
        {headings && headings.map((heading) => {
          return (
            <List.Item key={heading.text} pb='md'>
              <Text component='a' href={`#${heading.id}`}>{heading.text}</Text>
            </List.Item>
          );
        })}

      </List>
    </Container>
  );
};

const CustomH = ({ id, order, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <Title id={id} order={order} {...rest} />
      </Link>
    );
  }
  return <Title order={order} {...rest} />;
}

const CustomH1 = (props) => {
  return <CustomH {...props} order={1} />
};

const CustomH2 = (props) => {
  return <CustomH {...props} order={2} />
};

const CustomH3 = (props) => {
  return <CustomH {...props} order={3} />
};

const CustomH4 = (props) => {
  return <CustomH {...props} order={4} />
};

const CustomH5 = (props) => {
  return <CustomH {...props} order={5} />
};

const CustomH6 = (props) => {
  return <CustomH {...props} order={6} />
};

const components = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
};
export default function PostPage({ source, frontMatter, headings }) {
  return (
    <BlogContainer
      navigation={
        <TableOfContents headings={headings} />
      }
      backLink='/blog'
    >
      <div>
      <Title order={1}>
          {frontMatter.title}
        </Title>
        {frontMatter.description && (
          <Text>{frontMatter.description}</Text>
        )}
        <main>
          <MDXRemote components={components} {...source} />
        </main>
      </div>
    </BlogContainer>
  )
}

export const getStaticProps = async ({ params }) => {
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