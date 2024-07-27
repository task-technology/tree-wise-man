export default async function getAllTestimonials() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");

  return result.json();
}
