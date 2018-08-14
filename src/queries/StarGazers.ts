import gql from 'graphql-tag';

export default gql`
	{
		search(query: "language:JavaScript stars:>10000", type: REPOSITORY, first: 10) {
			repositoryCount
			edges {
				node {
					... on Repository {
						name
						descriptionHTML
						stargazers {
							totalCount
						}
						forks {
							totalCount
						}
						updatedAt
					}
				}
			}
		}
	}
`;
