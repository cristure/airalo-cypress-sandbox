import auth from '../../fixtures/authentication.json'
import merhabaPlan from '../../fixtures/merhabaPlan.json'

context('API testing', () => {
    beforeEach(() => {
        cy.request('POST', `${Cypress.env().apiUrl}/v2/token`, auth)
            .then((response) => {
                expect(response).property('status').to.equal(200)

                cy.wrap(response.body.data.access_token)
                    .as('token')
            })
    })

    it('order', function()  {
                cy.request({
                    method: "POST",
                    url: `${Cypress.env().apiUrl}/v2/orders`,
                    headers: {
                        Authorization: 'Bearer ' + this.token
                    },
                    body : merhabaPlan
                }).then((response) => {
                    expect(response).property('status').to.equal(200)
                })
            })

    it('get sims', function() {
                cy.request({
                    method: "GET",
                    url: `${Cypress.env().apiUrl}/v2/sims`,
                    headers: {
                        Authorization: 'Bearer ' + this.token
                    },
                }).then((response) => {
                    expect(response).property('status').to.equal(200)
                    expect(response.body.data).to.be.a('array').and.lengthOf(6)

                    let arr = response.body.data.map(e=>e.simable.package_id)
                    const filteredSims = arr.filter(filterSims);
                    expect(filteredSims).to.be.a('array').and.lengthOf(6)
                })
            })
})

function filterSims(value, index, array) {
    return value === "merhaba-7days-1gb"
}