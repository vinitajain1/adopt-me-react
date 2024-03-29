export default async function fetchPet({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!res.ok) {
    throw new Error("Fetch not Ok:(");
  }
  return res.json();
}
