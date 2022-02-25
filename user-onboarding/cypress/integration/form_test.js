// write tests here
describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
})

const nameInput = () => cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')
const submitBtn = () => cy.get('input[name=submit]')
const tos = () => cy.get('input[name=tos]')

it('sanity check to make sure test work', () => {
    expect(1+2).to.equal(3)
    expect(2+2).not.to.equal(5)
    expect({}).not.to.equal({})
    expect({}).to.eql({})
})
it('the proper element are showing', () => {
   nameInput().should('exist')
   emailInput().should('.exist') 
   passwordInput().should('exist')
   submitBtn().should('exist')
   tos().should('exist')
   cy.contains('Submit Quote').should('exist')
   cy.contains(/submit quote/i).should('exist')
})

describe(
    'Filling out the inputs and cancelling', () => {
        it('can navigate to site', () => {
            cy.url().should('include','localhost')
        })
        it('submit button start out disabled', () => {
            submitBtn().should('be.disabled')
        })
        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Be nice to the CSS expert')
                .should('have.value', 'Be nice to the CSS expert')
            authorInput()
                .should('have.value', '')
                .type('Kenan')
                .should('have.value', '')
        })
        it('the submit button enables when both inputs are filled out', () => {
            authorInput().type('Kenan')
            textInput().type('Have fun')
            submitBtn().should('not.be.disabled')
        })
        it('cancel button can reset the inputs and disable the submit button', ()=> {
            authorInput().type('Kenan')
            textInput().type('Have fun')
            cancelBtn().click()
            textInput().should('have.value', '')
            authorInput().should('have.value', '')
            submitBtn().should('be.disabled')
        })
        
    }
)