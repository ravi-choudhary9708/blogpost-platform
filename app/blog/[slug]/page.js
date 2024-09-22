// pages/blogposts/[slug]/page.js
export default async function BlogPostPage({ params }) {
    const { slug } = params;
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    
    if (!response.ok) {
      return <div className="text-white">Post not found</div>;
    }
  
    const post = await response.json();
  
    return (
      <div className="min-h-[80vh] w-[98vw]">
             <section class="text-white body-font ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" bis_skin_checked="1">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" bis_skin_checked="1">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{post.title}
       
      </h1>
      <p class="mb-8 leading-relaxed">{post.body}</p>
      <div class="flex justify-center" bis_skin_checked="1">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-lg" bis_skin_checked="1">
      <img className="rounded-lg" src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="" />
    </div>
  </div>
</section>
      </div>
    );
  }
  