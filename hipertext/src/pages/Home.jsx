import ImageBrasil from '../assets/brasil.jpg'
const Home = () => {
  return (
    <>
      <div className='container-conteudo'>
        <div className="texts">
          <p className="paragraphs">
            Os hinos cívicos brasileiros, como o Hino Nacional Brasileiro, o Hino da Independência e o Hino à Bandeira, são expressões musicais do sentimento de patriotismo e identidade nacional.
          </p>
          <div className="image-brazil">
            <img src={ImageBrasil} alt="Imagem do Nacionalismo Brasil" className="brazil" />
          </div>
          <p className='paragraphs'>
            O Hino Nacional Brasileiro, composta por <a href="https://pt.wikipedia.org/wiki/Francisco_Manuel_da_Silva">Francisco Manuel da Silva</a> em 1822, é um dos símbolos mais importantes do país. Sua letra, escrita por Joaquim Osório Duque-Estrada em 1909, celebra a independência do Brasil e exalta suas belezas naturais e a bravura de seu povo. O hino evoca sentimentos de orgulho nacional e patriotismo.
          </p>
          <p className="paragraphs">
            O Hino da Independência, também conhecido como "Hino da Proclamação da Independência", foi composto por Dom Pedro I em 1822. Esta música é associada ao momento histórico da independência do Brasil de Portugal, proclamada às margens do rio Ipiranga. O hino celebra o momento histórico da independência e o papel de Dom Pedro I como o libertador do Brasil.
          </p>
          <p className="paragraphs">
            O Hino à Bandeira Nacional, composto por <a href="https://pt.wikipedia.org/wiki/Olavo_Bilac">Olavo Bilac</a> e musicado por <a href="https://pt.wikipedia.org/wiki/Francisco_Braga">Francisco Braga</a>, é uma ode à bandeira brasileira, símbolo da unidade nacional e da soberania do país. A letra exalta os ideais de liberdade, justiça e progresso representados pelas cores e símbolos da bandeira, inspirando um sentimento de devoção e respeito pelo país e seus valores.
          </p>

          <p className="paragraphs">
            A "Canção do Exílio" é uma das obras mais emblemáticas da literatura brasileira, escrita por Gonçalves Dias em 1843 durante seu exílio em Portugal. A obra reflete o sentimento de saudade e amor pela pátria distante, sendo uma expressão vívida do nacionalismo romântico brasileiro.
          </p>
          <p className="paragraphs">
            <a href="https://pt.wikipedia.org/wiki/Gonçalves_Dias">Gonçalves Dias</a>, um dos principais representantes do Romantismo brasileiro, escreveu essa obra durante um período de desterro voluntário em Portugal, longe de sua terra natal. Através de versos nostálgicos e emotivos, ele retrata a natureza exuberante, as belezas naturais e a cultura do Brasil, contrastando-as com a melancolia do exílio.
          </p>
          <p className="paragraphs">
            Essas obras literárias e musicais são importantes manifestações do nacionalismo brasileiro, transmitindo os sentimentos de amor pela pátria, orgulho nacional e identidade cultural que permeiam a história e a cultura do Brasil. Elas representam a expressão artística e poética do sentimento de pertencimento e amor à terra brasileira.
            
            Além das obras literárias e musicais mencionadas, vale ressaltar que o nacionalismo brasileiro também se manifesta em diversas outras formas de expressão cultural, como na arte visual, no cinema, na dança, na culinária e até mesmo na moda. Através dessas diversas formas de expressão, os brasileiros celebram suas raízes, valores e tradições, reafirmando sua identidade nacional e promovendo um senso de unidade e pertencimento.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home