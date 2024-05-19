const { ApolloServer, gql } = require('apollo-server');


const books = [ // 本の情報を配列で定義
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: '走れメロス',
        author: '太宰治',
    },
];


// 本の情報を取得するためのGraphQLの問い合わせを定義 
// 本の情報を取得するためのクエリを定義
// どういう風にAPIに対して問い合わせるかを定義
// gqlはapollo-serverからimportしている 
// typeDefsはGraphQLのスキーマを定義するための変数
// testという名前のクエリを定義
// booksの配列を返す
const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        test: [Book]
    }
`;

// 本の情報を取得するためのリゾルバを定義
// 本の情報を取得するためのクエリを処理する関数を定義
// テストが実行されたらどんな値を返すかを定義
// testがkeyになっているのは、typeDefsで定義したクエリ名と一致しているため

const resolvers = {
    Query: {
        test: () => books,
    },
};

// ApolloServerをインスタンス化してサーバーを起動
// サーバーを起動する際に、スキーマとリゾルバのふたつを引数として渡す
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});