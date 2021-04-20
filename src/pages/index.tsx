export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// Metodo Server Side Rendering, os dados estarão disponiveis pro usuário ao carregar a página
// porém toda vez que a página for recarregada uma nova chamada a API sera feita, para utilização desse método
// basta usar a function getServerSideProps

// Metodo Static Site Generation, realiza uma unica chamada a api e, os dados estarão disponiveis de forma estática para todos os usuários,
// fazendo chamadas a api para atualização dos dados de acordo com o que está descrito no "revalidate"
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // recebe o tempo em segundos. Chamadas a API de 8 em 8 horas.
  }
}
