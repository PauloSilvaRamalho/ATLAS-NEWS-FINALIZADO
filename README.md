ATLAS NEWS FILTRO E POSTAGEM

criadores: Kayky Ribeiro Silva e Paulo Henrique Silva Ramalho

resumo: Atlas News é um site feito para celulares que permite a postagem de notícias com tags, manchetes, texto e uma imagem (Via endereço da imagem), permite a filtragem das notícias por meio de filtros e também o clique que redireciona a manchete clicada para a noícia completa.

_____________________________________________________________________________________________________________________________________

HOME DO APP: consiste nos arquivos "Header.jsx" e "Index.jsx", que respectivamente criam o Header do app e o menu com os itens de filtragem e postagem.

Header.jsx

<img width="373" height="60" alt="image" src="https://github.com/user-attachments/assets/ce2bfc32-5bd9-4449-a6b7-9289d2453c2c" /> <img width="201" height="335" alt="image" src="https://github.com/user-attachments/assets/abfdf642-b582-4754-8d4e-77ae695b6730" />


Index.jsx

<img width="369" height="606" alt="image" src="https://github.com/user-attachments/assets/27b5fc90-a7bd-4616-ba9f-0954fb30893e" /> <img width="371" height="607" alt="image" src="https://github.com/user-attachments/assets/4b45b1e4-e6fa-4daf-aad8-88ddf30f9705" />

_____________________________________________________________________________________________________________________________________

FILTRAGEM: consiste nos arquivos "esporte.jsx", "mundo.jsx", "tecnologia.jsx", que filtram utilizando o "title" de cada postagem.

<img width="374" height="666" alt="image" src="https://github.com/user-attachments/assets/9967b901-aa89-40b2-a2ca-58fe5000982e" />

<img width="373" height="667" alt="image" src="https://github.com/user-attachments/assets/b241ab8a-b509-4903-a7fa-1fb855eecce1" />

<img width="372" height="665" alt="image" src="https://github.com/user-attachments/assets/82f8f255-d795-41c0-b609-2bc68fbb1085" />

_____________________________________________________________________________________________________________________________________

POSTAGEM: também está dentro do arquivo "header", utilizando diversos inputs e ID automática via date.now com milisegundos.

<img width="375" height="663" alt="image" src="https://github.com/user-attachments/assets/85a825b4-b83b-4f0a-8bc1-9c116fb1ced6" />

_____________________________________________________________________________________________________________________________________

TEXTO COMPLETO DA NOTÍCIA: foi utilizado o "NoticiaEsporte1.jsx", o nome era apenas um placeholder, pois este arquivo gera o texto completo para quaisquer notícia.

<img width="373" height="663" alt="image" src="https://github.com/user-attachments/assets/b2fa9332-4055-4b9a-9429-e6e33acdb0f1" /> <img width="371" height="665" alt="image" src="https://github.com/user-attachments/assets/35bf770e-e37b-4946-9334-d419d3e0200f" />

_____________________________________________________________________________________________________________________________________

POSTS: são estilizados e tem sua funções inseridas utilizando a function "NewsItem" e são guardados utilizando no cache do navegador via AsyncStorage.

_____________________________________________________________________________________________________________________________________

Melhorias que poderiam ser feitas: 

  1.A opção de login está funcional, porém não há onde colocar as informações na tela de um celular de forma confortável. 
  2.Não tem como editar as notícias, somente postar.
  3.Eu deveria ter utilizado category para filtrar as notícias e não o title.
  4.As imagens são enviadas via endereço de imagem o que impossibilita a sua edição e formatação correta no container.







