module.exports = {


bind: function(app) {
  
  
    // Locals
    app.locals = {
      serviceTitle: 'Platform Development Kit',
      baseurl: '/'
    }
    
    
    // Routes
    app.get('/', function (req, res) {
      res.render('index', {
        docTitle: 'PLatform Development Kit',
        pageTitle: 'Platform Development Kit',
        pageLead: 'Extends the <abbr title="Government Digital Services">GDS</abbr> GOV.UK packages for developing citizen and business facing services as a platform.',
        phaseBanner: true,
        isHome: true,
        usePrettify: false
      });
    });
    
    
    app.get('/typography', function (req, res) {
      res.render('typography', {
        docTitle: 'Typography',
        pageTitle: 'Typography',
        pageLead: 'For GOV.UK domains, always use the <abbr title="Government Digital Services">GDS</abbr> Transport Website font in Light and Bold.',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/buttons-and-filters', function (req, res) {
      res.render('buttons-and-filters', {
        docTitle: 'Buttons and filters',
        pageTitle: 'Buttons and filters',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/data', function (req, res) {
      res.render('data', {
        docTitle: 'Data',
        pageTitle: 'Data',
        pageLead: 'Consider putting content into tables to make it easier to scan.',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/form-elements', function (req, res) {
      res.render('form-elements', {
        docTitle: 'Form elements',
        pageTitle: 'Form elements',
        pageLead: 'Keep forms as simple as possible &ndash; only ask what&rsquo;s needed to run your service.',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/errors-and-validation', function (req, res) {
      res.render('errors-and-validation', {
        docTitle: 'Errors and validation',
        pageTitle: 'Errors and validation',
        pageLead: 'Minimise the number of errors on a page.',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/helper-classes', function (req, res) {
      res.render('helper-classes', {
        docTitle: 'Helper classes',
        pageTitle: 'Helper classes',
        pageLead: 'Allows for greater flexibility when building pages.',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/banners', function (req, res) {
      res.render('banners', {
        docTitle: 'Banners',
        pageTitle: 'Banners',
        pageLead: '',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/navigation', function (req, res) {
      res.render('navigation', {
        docTitle: 'Navigation',
        pageTitle: 'Navigation',
        pageLead: '',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/media', function (req, res) {
      res.render('media', {
        docTitle: 'Media',
        pageTitle: 'Media',
        pageLead: '',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/timeline', function (req, res) {
      res.render('timeline', {
        docTitle: 'Timeline',
        pageTitle: 'Timeline',
        pageLead: 'A timeline with semantic <abbr title="Hyper Text Markup Language">HTML</abbr>.',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/data-visualisation', function (req, res) {
      res.render('data-visualisation', {
        docTitle: 'Data visualisation',
        pageTitle: 'Data visualisation',
        pageLead: '',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/labels', function (req, res) {
      res.render('labels', {
        docTitle: 'Labels',
        pageTitle: 'Labels',
        pageLead: '',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
    app.get('/colours', function (req, res) {
      res.render('colours', {
        docTitle: 'Colours',
        pageTitle: 'Colours',
        pageLead: 'Always use the GOV.UK colour palette.',
        phaseBanner: true,
        usePrettify: true
      });
    });
    
    
  }


};