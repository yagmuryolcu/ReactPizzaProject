describe('Pizza Sipariş Formu Testleri', () => {
  beforeEach(() => {
cy.visit('http://localhost:5173/form');
  });
   it('Form sayfası başarıyla yükleniyor', () => {
    cy.contains('Position Absolute Acı Pizza').should('be.visible');
    cy.contains('85.50₺').should('be.visible');
    cy.get('form').should('be.visible');
  });
  it('Pizza boyutu seçimi çalışıyor', () => {
    cy.get('#pizza-kucuk').click();
    cy.get('#pizza-kucuk').should('be.checked');

    cy.get('#pizza-orta').click();
    cy.get('#pizza-orta').should('be.checked');
    cy.get('#pizza-kucuk').should('not.be.checked');

    cy.get('#pizza-buyuk').click();
    cy.get('#pizza-buyuk').should('be.checked');
  });
   it('Hamur kalınlığı seçimi çalışıyor', () => {
    cy.get('#hamur').select('ince');
    cy.get('#hamur').should('have.value', 'ince');

    cy.get('#hamur').select('orta');
    cy.get('#hamur').should('have.value', 'orta');

    cy.get('#hamur').select('kalin');
    cy.get('#hamur').should('have.value', 'kalin');
  });
 it('Malzeme seçimi validasyonu çalışıyor', () => {
    cy.get('input[value="Pepperoni"]').click();
    cy.get('input[value="Sosis"]').click();
    cy.get('input[value="Kanada Jambonu"]').click();
    
    cy.get('#isim').type('Test User');
    cy.get('#pizza-orta').click();
    cy.get('#hamur').select('ince');
    cy.get('.siparis-ver-btn').click();

    cy.on('window:alert', (str) => {
      expect(str).to.contain('En az 4 malzeme seçmelisiniz');
    });

    cy.get('input[value="Tavuk Izgara"]').click();
    
    cy.get('input[value="Pepperoni"]').should('be.checked');
    cy.get('input[value="Sosis"]').should('be.checked');
    cy.get('input[value="Kanada Jambonu"]').should('be.checked');
    cy.get('input[value="Tavuk Izgara"]').should('be.checked');
  });

  it('Maksimum 10 malzeme seçimi kontrolü', () => {
    const malzemeler = [
      'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 
      'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 
      'Sarımsak', 'Biber', 'Peynir', 'Ananas', 'Kabak'
    ];

    for (let i = 0; i < 10; i++) {
      cy.get(`input[value="${malzemeler[i]}"]`).click();
    }

    cy.get(`input[value="${malzemeler[10]}"]`).click();

    cy.on('window:alert', (str) => {
      expect(str).to.contain('En fazla 10 malzeme seçebilirsiniz');
    });
  });

  
    it('İsim alanına metin girme testi', () => {
    const testMetni = 'Yağmur';
    cy.get('#isim').type(testMetni);
    cy.get('#isim').should('have.value', testMetni);
  });

  it('İsim alanı validasyonu çalışıyor', () => {
    cy.get('#isim').type('ab');
    cy.get('.siparis-ver-btn').click();
    
    cy.on('window:alert', (str) => {
      expect(str).to.contain('İsim en az 3 karakter olmalı');
    });

    cy.get('#isim').clear().type('Yağmur');
    cy.get('#isim').should('have.value', 'Yağmur');
  });
   it('Form gönderme testi', () => {
    cy.get('#isim').type('Test Kullanıcısı');
    cy.get('#pizza-orta').click();
    cy.get('#hamur').select('ince');
    
    cy.get('input[value="Pepperoni"]').click();
    cy.get('input[value="Sosis"]').click();
    cy.get('input[value="Kanada Jambonu"]').click();
    cy.get('input[value="Tavuk Izgara"]').click();

    cy.intercept('POST', 'https://reqres.in/api/users', {
      statusCode: 201,
      body: {
        id: 123,
        createdAt: '2025-08-08T15:30:00.000Z'
      }
    }).as('formGonder');

    cy.get('.siparis-ver-btn').click();

    cy.wait('@formGonder');
  });


  it('Form başarıyla gönderiliyor', () => {


    cy.get('#isim').type('Test Kullanıcı');
    cy.get('#pizza-orta').click();
    cy.get('#hamur').select('ince');
    
    cy.get('input[value="Pepperoni"]').click();
    cy.get('input[value="Sosis"]').click();
    cy.get('input[value="Kanada Jambonu"]').click();
    cy.get('input[value="Tavuk Izgara"]').click();

    cy.get('#siparis-notu').type('Test siparişi');

    cy.intercept('POST', 'https://reqres.in/api/users', {
      statusCode: 201,
      body: {
        id: 123,
        createdAt: '2025-08-08T15:30:00.000Z'
      }
    }).as('siparisGonder');

    cy.get('.siparis-ver-btn').click();

    cy.wait('@siparisGonder');

    cy.url().should('include', '/success');
  });


  });