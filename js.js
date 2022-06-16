
let headsRolls = 0
let tailsRolls = 0


document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("flip").addEventListener('click', function () {
        const flipResults = Math.random()

        let heads = false
        if (flipResults < 0.5) {
            heads = true;
        }
        if (heads) {
            document.getElementById('penny_image').src = 'pictures/penny.png'
            document.getElementById('status_message').textContent = "It's Heads!"
            headsRolls += 1
            document.getElementById("heads").innerText = headsRolls;
        }
        else {

            document.getElementById('penny_image').src = 'pictures/tails.png'
            document.getElementById('status_message').textContent = "It's Tails!"
            tailsRolls += 1
            document.getElementById("tails").innerText = tailsRolls;
        }


        let total = headsRolls + tailsRolls


        let percentHeads = Math.round((headsRolls / total) * 100)
        let percentTails = Math.round((tailsRolls / total) * 100)


        document.getElementById('heads').src = "pictures/penny.png"
        document.getElementById('heads-percent').innerText = percentHeads + '%'
        document.getElementById('tails').src = "pictures/tails.png"
        document.getElementById('tails-percent').innerText = percentTails + '%'
    })

    document.getElementById('reset').addEventListener('click', function () {

        headsRolls = 0
        tailsRolls = 0


        document.getElementById('status_message').innerText = "Let's Get Rolling!"


        let total = headsRolls + tailsRolls


        let percentHeads = 0
        let percentTails = 0


        if (total > 0) {

            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }


        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})
