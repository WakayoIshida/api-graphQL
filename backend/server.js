const { ApolloServer, gql } = require('apollo-server');


const books = [ // 本の情報を配列で定義

    {
        id: 1,
        title: '1Q84',
        author: '村上春樹',
        publishedYear: 2009
    },
    {
        id: 2,
        title: 'アウト',
        author: '桐野夏生',
        publishedYear: 1997
    },
    {
        id: 3,
        title: '告白',
        author: '湊かなえ',
        publishedYear: 2008
    },
    {
        id: 4,
        title: '羊と鋼の森',
        author: '宮下奈都',
        publishedYear: 2015
    },
    {
        id: 5,
        title: '下町ロケット',
        author: '池井戸潤',
        publishedYear: 2010
    },
    {
        id: 6,
        title: '蹴りたい背中',
        author: '綿矢りさ',
        publishedYear: 2003
    },
    {
        id: 7,
        title: 'ブルーアワーにぶっ飛ばす',
        author: '山内マリコ',
        publishedYear: 2018
    },
    {
        id: 8,
        title: '天地明察',
        author: '冲方丁',
        publishedYear: 2009
    },
    {
        id: 9,
        title: '君の膵臓をたべたい',
        author: '住野よる',
        publishedYear: 2015
    },
    {
        id: 10,
        title: 'コンビニ人間',
        author: '村田沙耶香',
        publishedYear: 2016
    }
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
        id: Int
        title: String
        author: String
        publishedYear: Int
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