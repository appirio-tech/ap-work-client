/* jshint -W117, -W030 */
describe('SubmitWorkService', function () {
  var service, scope;

  beforeEach(function () {
    bard.appModule('app.submit-work');
    bard.inject('SubmitWorkService');
  });

  beforeEach(function () {
    service = SubmitWorkService;
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Submit work service', function () {
    it('should be created successfully', function () {
      expect(service).to.be.defined;
    });

    it('should return an object for getCurrent()', function() {
      var cur = service.getCurrent();
      expect(cur).to.be.defined;
      expect(cur.name).to.equal('');
    });

    describe('validation', function() {
      it('should be able to validate names', function() {
        // rule 1: 3 char min
        var res = service.validateName('a');
        expect(res.valid).to.equal(false);
        expect(res.reason).to.equal('minlength');
        // rule 2: must start with a letter
        res = service.validateName('1asd');
        expect(res.valid).to.equal(false);
        expect(res.reason).to.equal('letter');
        // rule 3: must be <= 50 char length
        // this one will just use maxlength
        res = service.validateName('foo');
        expect(res.valid).to.equal(true);
      });

      it('should be able to validate summary', function() {
        // rule 1: must be at least 200 characters
        var res = service.validateSummary('asdf');
        expect(res.valid).to.equal(false);
        expect(res.reason).to.equal('minlength');
  
        res = service.validateSummary('aasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdf');
        expect(res.valid).to.equal(false);
        expect(res.reason).to.equal('minlength');

        var str = '0123456789';
        str = str + str + str + str + str;
        str = str + str + str + str;
        res = service.validateSummary(str);
        expect(res.valid).to.equal(true);
      });

      it('should be able to validate usageDescription', function() {
        // rule 1: must be at least 200 characters
        var res = service.validateUsageDescription('asdf');
        expect(res.valid).to.equal(false);
        expect(res.reason).to.equal('minlength');
  
        res = service.validateUsageDescription('aasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdf');
        expect(res.valid).to.equal(false);
        expect(res.reason).to.equal('minlength');

        var str = '0123456789';
        str = str + str + str + str + str;
        str = str + str + str + str;
        res = service.validateUsageDescription(str);
        expect(res.valid).to.equal(true);
      });
    });

  });
});
