import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={
        {justifyContent : "center",
       display : "flex", alignItems : "center", 
       flexDirection : "column"}
       }>
      <h1>Click on any tab to know more details!</h1>
      <h2>Get information about Ports and HS Codes</h2>
      </div>
    </div>
  )
}