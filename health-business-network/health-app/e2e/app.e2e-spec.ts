import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for health-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be health-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('health-app');
    })
  });

  it('navbar-brand should be health-business-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('health-business-network@0.0.1');
  });

  
    it('Estudio component should be loadable',() => {
      page.navigateTo('/Estudio');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Estudio');
    });

    it('Estudio table should have 4 columns',() => {
      page.navigateTo('/Estudio');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  
    it('Universidad component should be loadable',() => {
      page.navigateTo('/Universidad');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Universidad');
    });

    it('Universidad table should have 3 columns',() => {
      page.navigateTo('/Universidad');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  
    it('Empleo component should be loadable',() => {
      page.navigateTo('/Empleo');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Empleo');
    });

    it('Empleo table should have 5 columns',() => {
      page.navigateTo('/Empleo');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('Empresa component should be loadable',() => {
      page.navigateTo('/Empresa');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Empresa');
    });

    it('Empresa table should have 3 columns',() => {
      page.navigateTo('/Empresa');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  
    it('ProcedimientoQuirigico component should be loadable',() => {
      page.navigateTo('/ProcedimientoQuirigico');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ProcedimientoQuirigico');
    });

    it('ProcedimientoQuirigico table should have 6 columns',() => {
      page.navigateTo('/ProcedimientoQuirigico');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  

});
