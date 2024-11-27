import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Joshua Okolo
      </h1>
      <p className="mb-4">
          {`Welcome to my portfolio. I like to build things. Read my articles to find out more. Thanks for swinging by :)`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
