export default function Subscribe({src}) {
    return (
    <section className="bg-amber-500  py-16 dark:bg-amber-500">
<div className="bg-amber-500">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
    <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
      <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>
      <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
    </div>
    <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
      <div className="flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autoComplete="email" 
        required="" className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 
        text-white shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset 
        focus:ring-gray-200 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
        <button type="submit" className="flex rounded-md bg-gray-600 px-3.5 py-2.5 text-sm 
        font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200">
        Subscribe</button>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-800">We care about your data. Read our <a
          href="/" className="font-semibold text-white hover:underline">privacy policy</a>.</p>
    </form>
  </div>
</div>
  </section>
  );
}