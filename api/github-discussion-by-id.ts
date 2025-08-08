module.exports = async function handler(req, res) {
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;
  
  if (!id) {
    return res.status(400).json({ error: 'Discussion ID is required' });
  }

  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    return res.status(500).json({ error: 'GitHub token not configured' });
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetDiscussion($id: ID!) {
            node(id: $id) {
              ... on Discussion {
                id
                title
                bodyHTML
                bodyText
                url
                author {
                  login
                  avatarUrl
                }
                createdAt
                updatedAt
                category {
                  name
                  slug
                }
                comments(first: 50) {
                  totalCount
                  nodes {
                    id
                    bodyHTML
                    bodyText
                    author {
                      login
                      avatarUrl
                    }
                    createdAt
                    updatedAt
                    replies(first: 10) {
                      totalCount
                      nodes {
                        id
                        bodyHTML
                        bodyText
                        author {
                          login
                          avatarUrl
                        }
                        createdAt
                        updatedAt
                      }
                    }
                  }
                }
                reactions(first: 10) {
                  totalCount
                  nodes {
                    content
                    user {
                      login
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          id: id
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      return res.status(400).json({ error: 'GraphQL errors', details: data.errors });
    }

    if (!data.data?.node) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    res.status(200).json(data.data.node);
  } catch (error) {
    console.error('Error fetching discussion:', error);
    res.status(500).json({ error: 'Failed to fetch discussion' });
  }
};
