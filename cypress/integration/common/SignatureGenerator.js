class SignatureGenerator {

    static generateRandomSignature(selector, maximumX,maximumY){


        for(let i = 1; i<(Math.random() * 9)+1; i++){
            cy.get(selector)
                .trigger('mousedown',Math.floor(Math.random() * maximumX-1)+1,Math.floor(Math.random() * maximumY-1)+1)
                .trigger('mousemove',Math.floor(Math.random() * maximumX-1)+1,Math.floor(Math.random() * maximumY-1)+1)
                .trigger('mousemove',Math.floor(Math.random() * maximumX-1)+1,Math.floor(Math.random() * maximumY-1)+1)
                .trigger('mousemove',Math.floor(Math.random() * maximumX-1)+1,Math.floor(Math.random() * maximumY-1)+1)
                .trigger('mouseup',Math.floor(Math.random() * maximumX-1)+1,Math.floor(Math.random() * maximumY-1)+1)
        }

    }

}

export default SignatureGenerator;
