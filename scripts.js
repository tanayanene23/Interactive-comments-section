// import user from './data.json' assert {type: 'json'};
// assert is deprecated hence instead of that using with
// but import has limited availbility, only for chrome and edge. 
// import user from './data.json' with {type: 'json'};
// console.log(user);


// fetch('./data.json')
//    .then(response => response.json())
//    .then(json => saveToLocalStorage(json))



function saveToLocalStorage(data){
    localStorage.setItem('jsonData', JSON.stringify(data));
} 

let deleteActive = false;

const sendBtn = document.getElementById('send');
// get iteam from local storage 
const commentsData = JSON.parse(localStorage.getItem('jsonData'));
console.log(commentsData)

showData(commentsData)

function showData(data){   
    for(let i=0; i<data.comments.length; i++){

        // for user comments
        if(data.comments[i].user.username == "juliusomo"){
            const otherUser = document.createElement('div')
            otherUser.setAttribute('class', 'other-users')
            otherUser.setAttribute('id', `${commentsData.comments[i].id}`)
            otherUser.innerHTML = `<div class="left">
            <img src="./images/icon-plus.svg" alt="plus" id="plus">
            <p class="score">${data.comments[i].score}</p>
            <img src="/images/icon-minus.svg" alt="minus" id="minus">
            </div>
            <div class="right">
            <div class="top">
                <div class="top-left">
                <img src="${data.comments[i].user.image.png}" alt="pfp">
                <p>${data.comments[i].user.username}</p>
                <p id="you">you</p>
                <p>${data.comments[i].createdAt}</p>
                </div>
                <div class="top-right">
                    <div class="actions">
                    <div class="delete">
                        <img src="./images/icon-delete.svg" alt="delete">
                        <p>Delete</p>
                    </div>
                    <div class="edit">
                        <img src="./images/icon-edit.svg" alt="edit">
                        <p>Edit</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="bottom"><p>${data.comments[i].content}</p></div>
            </div>`

            const userComments = document.querySelector('.user-comments');
            userComments.appendChild(otherUser);
    
        }
        else{
            const otherUser = document.createElement('div')
            otherUser.setAttribute('class', 'other-users')
            otherUser.setAttribute('id', `${commentsData.comments[i].id}`)
            otherUser.innerHTML = `<div class="left">
            <img src="./images/icon-plus.svg" alt="plus" id="plus">
            <p class="score">${data.comments[i].score}</p>
            <img src="/images/icon-minus.svg" alt="minus" id="minus">
            </div>
            <div class="right">
            <div class="top">
                <div class="top-left">

                <img src="${data.comments[i].user.image.png}" alt="pfp">
                <p>${data.comments[i].user.username}</p>
                <p>${data.comments[i].createdAt}</p>
                </div>
                <div class="top-right">
                <div class="reply-section">
                    <img src="./images/icon-reply.svg" alt="reply" id="reply">
                    <p>Reply</p>
                </div>
                </div>
            </div>
            <div class="bottom"><p>${data.comments[i].content}</p></div>
            </div>`

            const userComments = document.querySelector('.user-comments');
            userComments.appendChild(otherUser);
    
        }
            // for replies:
            for(let j=0; j<data.comments[i].replies.length; j++){
                if(data.comments[i].replies[j].user.username == "juliusomo"){                    
                    const otherUser = document.createElement('div')
                    otherUser.setAttribute('class', 'other-users')
                    otherUser.classList.add("other-replies")
                    otherUser.setAttribute('id', `${commentsData.comments[i].replies[j].id}`)
                    otherUser.innerHTML = `<div class="left">
                    <img src="./images/icon-plus.svg" alt="plus" id="plus">
                    <p class="score">${data.comments[i].replies[j].score}</p>
                    <img src="/images/icon-minus.svg" alt="minus" id="minus">
                    </div>
                    <div class="right">
                    <div class="top">
                        <div class="top-left">
                        <img src="${data.comments[i].replies[j].user.image.png}" alt="pfp">
                        <p>${data.comments[i].replies[j].user.username}</p>
                        <p id="you">you</p>
                        <p>${data.comments[i].replies[j].createdAt}</p>
                        </div>
                        <div class="top-right">
                            <div class="actions">
                            <div class="delete">
                                <img src="./images/icon-delete.svg" alt="delete">
                                <p>Delete</p>
                            </div>
                            <div class="edit">
                                <img src="./images/icon-edit.svg" alt="edit">
                                <p>Edit</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom"><p><span id="tagging">@${data.comments[i].replies[j].replyingTo}</span> <span>${data.comments[i].replies[j].content}</span></p></div>
                    </div>`
    
                    // const repliesList = document.querySelector('.user-comments')
                    // repliesList.appendChild(otherUser)

                    const vl = document.createElement('div')
                    vl.setAttribute('class', 'vl')
                    // otherUser.insertAdjacentElement("beforebegin", vl)
                    const repliesContainer = document.createElement('div')
                    repliesContainer.setAttribute('class', 'replies-container')
                    repliesContainer.appendChild(vl)
                    repliesContainer.appendChild(otherUser)
                    const repliesList = document.querySelector('.user-comments');
                    repliesList.appendChild(repliesContainer);
                }
                else{
                    const otherUser = document.createElement('div')
                    otherUser.setAttribute('class', 'other-users')
                    otherUser.classList.add("other-replies")
                    otherUser.setAttribute('id', `${commentsData.comments[i].replies[j].id}`)
                    otherUser.innerHTML = `<div class="left">
                    <img src="./images/icon-plus.svg" alt="plus" id="plus">
                    <p class="score">${data.comments[i].replies[j].score}</p>
                    <img src="/images/icon-minus.svg" alt="minus" id="minus">
                    </div>
                    <div class="right">
                    <div class="top">
                        <div class="top-left">
                        <img src="${data.comments[i].replies[j].user.image.png}" alt="pfp">
                        <p>${data.comments[i].replies[j].user.username}</p>
                        <p>${data.comments[i].replies[j].createdAt}</p>
                        </div>
                        <div class="top-right">
                        <div class="reply-section">
                            <img src="./images/icon-reply.svg" alt="reply" id="reply">
                            <p>Reply</p>
                        </div>
                        </div>
                    </div>
                    <div class="bottom"><p><span id="tagging">@${data.comments[i].replies[j].replyingTo}</span> <span> ${data.comments[i].replies[j].content}</span></p></div>
                    </div>`

                    const vl = document.createElement('div')
                    vl.setAttribute('class', 'vl')
                    // otherUser.insertAdjacentElement("beforebegin", vl)
                    const repliesContainer = document.createElement('div')
                    repliesContainer.setAttribute('class', 'replies-container')
                    repliesContainer.appendChild(vl)
                    repliesContainer.appendChild(otherUser)
                    const repliesList = document.querySelector('.user-comments');
                    repliesList.appendChild(repliesContainer);


                    // const repliesList = document.querySelector('.user-comments');
                    // repliesList.appendChild(otherUser);
                }

                    for(let k=0; k<data.comments[1].replies[0].repliesLevelTwo.length; k++){
                        const otherUser = document.createElement('div')
                        otherUser.setAttribute('class', 'other-users')
                        otherUser.classList.add("other-replies")
                        otherUser.setAttribute('id', `${commentsData.comments[1].replies[0].repliesLevelTwo[k].id}`)
                        otherUser.innerHTML = `<div class="left">
                        <img src="./images/icon-plus.svg" alt="plus" id="plus">
                        <p class="score">${data.comments[1].replies[0].repliesLevelTwo[k].score}</p>
                        <img src="/images/icon-minus.svg" alt="minus" id="minus">
                        </div>
                        <div class="right">
                        <div class="top">
                            <div class="top-left">
                            <img src="${data.comments[1].replies[0].repliesLevelTwo[k].user.image.png}" alt="pfp">
                            <p>${data.comments[1].replies[0].repliesLevelTwo[k].user.username}</p>
                            <p id="you">you</p>
                            <p>${data.comments[1].replies[0].repliesLevelTwo[k].createdAt}</p>
                            </div>
                            <div class="top-right">
                                <div class="actions">
                                <div class="delete">
                                    <img src="./images/icon-delete.svg" alt="delete">
                                    <p>Delete</p>
                                </div>
                                <div class="edit">
                                    <img src="./images/icon-edit.svg" alt="edit">
                                    <p>Edit</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom"><p><span id="tagging">@${data.comments[1].replies[0].repliesLevelTwo[k].replyingTo}</span> <span>${data.comments[1].replies[0].repliesLevelTwo[k].content}</span></p></div>
                        </div>`
        
                        // const repliesList = document.querySelector('.user-comments')
                        // repliesList.appendChild(otherUser)

                        const vl = document.createElement('div')
                        vl.setAttribute('class', 'vl')
                        // otherUser.insertAdjacentElement("beforebegin", vl)
                        const repliesContainer = document.createElement('div')
                        repliesContainer.setAttribute('class', 'replies-container')
                        repliesContainer.appendChild(vl)
                        repliesContainer.appendChild(otherUser)

                        const repliesList = document.querySelector('.user-comments');
                        repliesList.appendChild(repliesContainer);


                    }

            }
    } 
}



// Add new comment:
sendBtn.addEventListener('click', e=>{
    console.log('send button clicked')
    if(deleteActive == true){
        return
    }
    // comment text
    let textArea = document.querySelector('textarea').value
    // comment date
    const date = new Date();
    const dateString = date.toDateString()
    if(textArea.length == 0){
        alert('Enter a comment!')
    }
    else{
        commentsData.comments.push({
            id: commentsData.comments.length + 1,
            content: textArea,
            createdAt: dateString,
            score: 0,
            replies: [],
            user: {
                image:
                {
                    png: './images/avatars/image-juliusomo.png', 
                    webp: './images/avatars/image-juliusomo.webp'
                }, 
                username: "juliusomo"
                }
        })

        console.log(commentsData);
        saveToLocalStorage(commentsData);
        let text = document.querySelector('textarea')
        text.value = '';

        const comments = document.querySelector('.user-comments');
        comments.innerHTML = "";
        showData(commentsData);    
    }
})


const replies = document.querySelectorAll(".reply-section")
console.log(replies)

let buttonAction = true;
function reply(){
    // const replies = document.querySelectorAll("#reply")
    const replies = document.querySelectorAll(".reply-section")
    replies.forEach(reply=>{
        reply.addEventListener('click', e=>{
            // window.location.reload();
            console.log('reply button clicked')
            if(deleteActive == true){
                return
            }
            if(buttonAction == false){
                return;
            }

            const newReply = document.createElement('div')
            newReply.setAttribute('class', 'current-user')


            newReply.innerHTML = `<div class="new-comment">
            <img src="./images/avatars/image-juliusomo.png" alt="currentUser">
            <textarea name="new-reply" id="new-reply" placeholder="Add a reply..."></textarea>
            <button type="submit" id="send-reply">REPLY</button>
            </div>`


            const commentList = reply.parentElement.parentElement.parentElement.parentElement.parentElement;
            let baseComment = reply.parentElement.parentElement.parentElement.parentElement;
            console.log('base comment issssssss:')
            console.log(baseComment)

            if(baseComment.classList.contains('other-replies')){
                baseComment = baseComment.parentElement;
            }


            console.log('base-comment after if:')
            console.log(baseComment)
            baseComment.insertAdjacentElement('afterend', newReply)

            buttonAction = false;

            const replyBtn = document.getElementById("send-reply")
            replyBtn.addEventListener('click', e=>{
                window.location.reload();
                buttonAction = true;

                // const commentText = reply.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.innerHTML
                // console.log(`COMMENT TEXT IZ ${commentText}`)
                const commentId = reply.parentElement.parentElement.parentElement.parentElement.id;
                console.log('COMMENT ID IZ')
                console.log(commentId)

                for(let i=0; i<commentsData.comments.length; i++){
                    // if(commentsData.comments[i].content == commentText){
                    if(commentsData.comments[i].id == commentId){
                        const replyArea = document.getElementById('new-reply')
                        let replyText = replyArea.value;
                        console.log(`THIS IS REPLY TEXT::::${replyText}`)
                        if(replyText == ''){
                            alert('Please enter a reply.')
                            return;
                        }
                        console.log('loop is also working')
                        const replyUsername = commentsData.comments[i].user.username;

                        const date = new Date();
                        const dateString = date.toDateString()
                                                        // .unshift
                        commentsData.comments[i].replies.push({
                            // id: commentsData.comments[i].replies.length + 1,
                            id: `${commentsData.comments[i].id}.${commentsData.comments[i].replies.length + 1}`,
                            content: replyText,
                            createdAt: dateString,
                            score: 0,
                            replyingTo: replyUsername,
                            user: {
                              image: { 
                                png: "./images/avatars/image-juliusomo.png",
                                webp: "./images/avatars/image-juliusomo.webp"
                              },
                              username: "juliusomo"
                            }
                        })                    
                    }
                    

                    // for nested replies.......................
                    for(let j=0; j<commentsData.comments[i].replies.length; j++){
                        if(commentsData.comments[i].replies[j].id == commentId){
                            const replyArea = document.getElementById('new-reply')
                            let replyText = replyArea.value;
                            console.log(`THIS IS REPLY TEXT::::${replyText}`)
                            if(replyText == ''){
                                alert('Please enter a reply.')
                                return;
                            }
                            console.log('loop is also working')
                            const replyUsername = commentsData.comments[i].replies[j].user.username;
    
                            const date = new Date();
                            const dateString = date.toDateString()
                                                            // .unshift
                            commentsData.comments[i].replies[j].repliesLevelTwo.push({
                                // id: commentsData.comments[i].replies.length + 1,
                            id: `${commentsData.comments[i].replies[j].id}.${commentsData.comments[i].replies[j].repliesLevelTwo.length + 1}`,
                                content: replyText,
                                createdAt: dateString,
                                score: 0,
                                replyingTo: replyUsername,
                                user: {
                                  image: { 
                                    png: "./images/avatars/image-juliusomo.png",
                                    webp: "./images/avatars/image-juliusomo.webp"
                                  },
                                  username: "juliusomo"
                                }
                            })                    
                        }
                    }
                }
                const replyArea = document.getElementById('new-reply');
                replyArea.value = "";
                console.log(commentsData);
                saveToLocalStorage(commentsData);
                const comments = document.querySelector('.user-comments');
                comments.innerHTML = "";
                showData(commentsData);

                // commentList.removeChild(newReply);              
            })

        })
    })
}
reply()



const deletebtns = document.querySelectorAll('.delete')


deletebtns.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", e=>{
        console.log('delete button clicked')
        deleteActive = true;
        const deletePopup = document.querySelector(".delete-popup");
        deletePopup.style.display = 'flex';

        const container = document.querySelector('.container');
        console.log(container)
        container.style.filter = "brightness(0.5)";
        
        

        const noButton = document.getElementById("no")
        noButton.addEventListener('click', e=>{
            window.location.reload();
            deletePopup.style.display = 'none'
            container.style.filter = 'none';
            deleteActive = false;
        })

        const yesButton = document.getElementById("yes")
        yesButton.addEventListener('click', e=>{
            window.location.reload();
            deleteActive = false;   
            deletePopup.style.display = 'none'
            container.style.filter = 'none';

            // const bottom = deleteBtn.parentElement.parentElement.parentElement.parentElement.lastElementChild;
            // const bottomText = bottom.querySelector('p').innerText;
            // console.log(bottomText) 

        const deleteId = deleteBtn.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        console.log('THE DELETED ID IS', deleteId);

        for(let i=0; i<commentsData.comments.length; i++){
            console.log('loop working')
            // if(commentsData.comments[i].content == bottomText){
            if(commentsData.comments[i].id == deleteId){
                console.log(commentsData.comments[i].content)
                console.log('content found')
                commentsData.comments.splice(i, 1)
                saveToLocalStorage(commentsData);

                const comments = document.querySelector('.user-comments');
                comments.innerHTML = "";
                showData(commentsData);

                
                // const parent = deleteBtn.parentElement.parentElement.parentElement.parentElement.parentElement
                // const userComments = document.querySelector('.user-comments');
                // userComments.removeChild(parent);

            }
            for(let j=0; j<commentsData.comments[i].replies.length; j++){
                // console.log('inner for working')
                // const replyText = `@${commentsData.comments[i].replies[j].replyingTo} ${commentsData.comments[i].replies[j].content}`
                // console.log(replyText)

                // if(replyText == bottomText){
                if(commentsData.comments[i].replies[j].id == deleteId){
                    console.log('reply found')
                    commentsData.comments[i].replies.splice(j, 1)
                    saveToLocalStorage(commentsData);

                    const comments = document.querySelector('.user-comments');
                    comments.innerHTML = "";
                    showData(commentsData);


                    // const parent = deleteBtn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                    // console.log(parent)
                    // const userComments = document.querySelector('.user-comments');
                    // userComments.removeChild(parent);
                }
                for(let k=0; k<commentsData.comments[1].replies[0].repliesLevelTwo.length; k++){
                    if(commentsData.comments[1].replies[0].repliesLevelTwo[k].id == deleteId){
                        console.log('reply found')
                        commentsData.comments[1].replies[0].repliesLevelTwo.splice(k, 1)
                        saveToLocalStorage(commentsData);
    
                        const comments = document.querySelector('.user-comments');
                        comments.innerHTML = "";
                        showData(commentsData);
                    }
                }
            }
        }
        })


    })
})




const editBtns = document.querySelectorAll('.edit')
editBtns.forEach(editBtn => {
    editBtn.addEventListener("click", e=>{
        // window.location.reload();
        console.log('edit button clicked')
        if(deleteActive == true){
            return
        }
        const right = editBtn.parentElement.parentElement.parentElement.parentElement;
        const bottom = right.lastElementChild;
        const value = bottom.innerText;
        const textTag = bottom.firstElementChild;
        bottom.removeChild(textTag);

        // const editArea = document.createElement('textarea');
        // bottom.appendChild(editArea);
        // editArea.innerText = value;

        bottom.innerHTML = `<textarea name="new-reply" id="edit-comment">${value}</textarea>
        <button type="submit" id="update">UPDATE</button>`

        bottom.style.display = 'flex';
        bottom.style.flexDirection = 'column';
        // bottom.style.alignItems = 'flex-end';
        
        bottom.style.gap = '1em';

        const otherUsers = document.querySelectorAll('other-users')

        // const editArea = document.getElementById('edit-comment')
        // editArea.style.width = '35em';
        
        bottom.style.backgroundColor = 'white';

        const commentId = editBtn.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        console.log(commentId)

        const button = bottom.lastElementChild;
        button.addEventListener('click', e=>{
            window.location.reload();
            const editedText = bottom.firstElementChild.value;
            for(i=0; i<commentsData.comments.length; i++){
                console.log('for edit working')
                if(commentsData.comments[i].id == commentId){
                // if(commentsData.comments[i].content == value){
                    console.log('match found in comments')
                    console.log(editedText);
                    commentsData.comments[i].content = editedText;
                    saveToLocalStorage(commentsData);

                    const comments = document.querySelector('.user-comments');
                    comments.innerHTML = "";
                    showData(commentsData);

                    // bottom.innerHTML = "";
                    // bottom.appendChild(textTag);
                    // textTag.innerText = editedText;
                }
                for(j=0; j<commentsData.comments[i].replies.length; j++){
                    // const replyText = `@${commentsData.comments[i].replies[j].replyingTo} ${commentsData.comments[i].replies[j].content}`
                    // if(replyText == value){
                    if(commentsData.comments[i].replies[j].id == commentId){
                        console.log('match found in replies')
                        commentsData.comments[i].replies[j].content = editedText;
                        saveToLocalStorage(commentsData);

                        const comments = document.querySelector('.user-comments');
                        comments.innerHTML = "";
                        showData(commentsData);
                    }

                            for(k=0; k<commentsData.comments[1].replies[0].repliesLevelTwo.length; k++){
                                if(commentsData.comments[1].replies[0].repliesLevelTwo[k].id == commentId){
                                    console.log('match found in replies')
                                    commentsData.comments[1].replies[0].repliesLevelTwo[k].content = editedText;
                                    saveToLocalStorage(commentsData);

                                    const comments = document.querySelector('.user-comments');
                                    comments.innerHTML = "";
                                    showData(commentsData);
                                }
                            }

                }
            }
            
        })
    })
})







// Event listener for plus buttons
const plusButtons = document.querySelectorAll('#plus');
plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.reload();
        console.log('plus button clicked')
        if(deleteActive == true){
            return
        }
        const commentId = button.parentElement.parentElement.id;
        for (let i=0; i<commentsData.comments.length; i++) {
            if (commentsData.comments[i].id == commentId) {
                commentsData.comments[i].score++;
                const scoreElement = button.parentElement.querySelector('.score');
                scoreElement.textContent = commentsData.comments[i].score;
                saveToLocalStorage(commentsData);
                break;
            }
            for(let j = 0; j<commentsData.comments[i].replies.length; j++){
                if(commentsData.comments[i].replies[j].id == commentId){
                    commentsData.comments[i].replies[j].score++;
                    const scoreElement = button.parentElement.querySelector('.score');
                    scoreElement.textContent = commentsData.comments[i].replies[j].score;
                    saveToLocalStorage(commentsData);
                    break;
                }

                for(let k = 0; k<commentsData.comments[1].replies[0].repliesLevelTwo.length; k++){
                    if(commentsData.comments[1].replies[0].repliesLevelTwo[k].id == commentId){
                        commentsData.comments[1].replies[0].repliesLevelTwo[k].score++;
                        const scoreElement = button.parentElement.querySelector('.score');
                        scoreElement.textContent = commentsData.comments[1].replies[0].repliesLevelTwo[k].score;
                        saveToLocalStorage(commentsData);
                        break;
                    }
                }
            }
        }
    });
});

// Event listener for minus buttons
const minusButtons = document.querySelectorAll('#minus');
minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.reload();
        console.log('minus button clicked')
        if(deleteActive == true){
            return
        }
        const commentId = button.parentElement.parentElement.id;
        for (let i=0; i<commentsData.comments.length; i++) {
            if (commentsData.comments[i].id == commentId) {
                commentsData.comments[i].score--;

                if(commentsData.comments[i].score < 0){
                    commentsData.comments[i].score = 0
                }

                const scoreElement = button.parentElement.querySelector('.score');
                scoreElement.textContent = commentsData.comments[i].score;
                
                saveToLocalStorage(commentsData);
                break;
            }
             for(let j = 0; j<commentsData.comments[i].replies.length; j++){
                if(commentsData.comments[i].replies[j].id == commentId){
                    commentsData.comments[i].replies[j].score--;

                    if(commentsData.comments[i].replies[j].score < 0){
                        commentsData.comments[i].replies[j].score = 0
                    }

                    const scoreElement = button.parentElement.querySelector('.score');
                    scoreElement.textContent = commentsData.comments[i].replies[j].score;
                    saveToLocalStorage(commentsData);
                    break;
                }

                    for(let k = 0; k<commentsData.comments[1].replies[0].repliesLevelTwo.length; k++){
                        if(commentsData.comments[1].replies[0].repliesLevelTwo[k].id == commentId){
                            commentsData.comments[1].replies[0].repliesLevelTwo[k].score++;
                            const scoreElement = button.parentElement.querySelector('.score');
                            scoreElement.textContent = commentsData.comments[1].replies[0].repliesLevelTwo[k].score;
                            saveToLocalStorage(commentsData);
                            break;
                        }
                    }
            }
        }
    });
});






