module.exports = async function handler(req, res) {
  
  const token = process.env['GITHUB_TOKEN'];
  
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          repository(owner: "lukecookssw", name: "dafuq-angular") {
            discussions(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
              nodes {
                id
                title
                bodyHTML
                url
                author { login }
                createdAt
              }
            }
          }
        }
      `
    }),
  });
  const data = await response.json();
  res.status(200).json(data.data.repository.discussions.nodes);
};

export {};