// ex1.1

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
// .then((res) => res.json())
// .then((data) => console.log(data))

// ex1.2

// fetch('https://jsonplaceholder.typicode.com/posts'), {
//     method: "POST",
//     body: JSON.stringify({
//         title: 'new'
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
// }
// .then((res) => res.json())
// .then((data) => console.log(data))

// ex1.3

// fetch('https://jsonplaceholder.typicode.com/posts/1'), {
//     method: "PUT",
//     body: JSON.stringify({
//         title: 'new'
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }
// .then((res) => res.json())
// .then((data) => console.log(data))


// ex1.4

// fetch('https://jsonplaceholder.typicode.com/posts/1'), {
//     method: "DELETE",
// }
// .then((res) => res.json())
// .then((data) => console.log(data))



// ex2

// const root = document.getElementById('root')

// const authorsObj = {
//     1: 'a',
//     2: 'b',
//     3: 'c',
//     4: 'd',
//     5: 'e',
//     6: 'f',
//     7: 'g',
//     8: 'h',
//     9: 'i',
//     10: 'j',
// }

// const renderWriterList = (list, name) => {
//     const wrapper = document.createElement('div')
//     const postList = document.createElement('ul')
//     const title = document.createElement('p')

//     title.innerText = `${name}'s posts:`

//     postList.forEach((post) => {
//         const li = document.createElement('li')
//         li.innerText = post.title
//         postList.appendChild(li)

//     })

//     wrapper.appendChild(title)
//     wrapper.appendChild(postList)

//     root.appendChild(wrapper)

// }

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
// .then((res) => res.json())
// .then((data) => {

//     for(let key in authorsObj) {
//         const posts = data.filter((post) => {
//         return Number(key) === post.userId
//     })

//         renderWriterList(posts, authorsObj[key])
//     }
// })
