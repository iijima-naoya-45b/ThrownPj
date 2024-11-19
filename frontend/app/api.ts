export async function fetchPosts() {
    const response = await fetch('https://localhost:443/api/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json()

    console.log(data)
    return data.posts;
  }
  