import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient<InMemoryCache>({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()  //Apollo Clientのキャッシュを設定  // クエリの結果をキャッシュすることで、クエリの結果を再利用できるようにするために必要
});

// ReactDOM.createRoot(document.getElementById('root')!).render(
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
   //React.StrictModeとは、アプリケーション内の潜在的な問題を警告するためのコンポーネント。
   //ApolloProviderは、ApolloクライアントをReactアプリケーションに提供するためのコンポーネント。
   //ApolloProviderは、Reactコンポーネントツリーのルートに配置する必要がある。
  <React.StrictMode> 
    <ApolloProvider client={client}>  
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
