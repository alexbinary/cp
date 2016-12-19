
let chai = require('chai')
let expect = chai.expect
chai.use(require('chai-fs'))

let fsSandbox = require('alexbinary.fs-sandbox')

let cp = require('./../src/index')

fsSandbox.setRoot(__dirname)

describe('cp', function () {
  describe('copy file in same folder', function () {
    it('promise', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo/bar1.txt')
      let sourcePath = sandbox.getPath('foo/bar1.txt')
      let targetPath = sandbox.getPath('foo/bar2.txt')
      // ## TEST
      cp(sourcePath, targetPath).then(() => {
        // ## Assert
        expect(targetPath).to.be.a.file().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
      }).then(() => done()).catch(done)
    })
    it('callback', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo/bar1.txt')
      let sourcePath = sandbox.getPath('foo/bar1.txt')
      let targetPath = sandbox.getPath('foo/bar2.txt')
      // ## TEST
      cp(sourcePath, targetPath, (err) => {
        // ## Assert
        expect(err).to.be.null
        expect(targetPath).to.be.a.file().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
        done()
      })
    })
  })
  describe('copy file in other folder', function () {
    it('promise', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar.txt')
      sandbox.mkdirpSync('foo2')
      let sourcePath = sandbox.getPath('foo1/bar.txt')
      let targetPath = sandbox.getPath('foo2/bar.txt')
      // ## TEST
      cp(sourcePath, targetPath).then(() => {
        // ## Assert
        expect(targetPath).to.be.a.file().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
      }).then(() => done()).catch(done)
    })
    it('callback', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar.txt')
      sandbox.mkdirpSync('foo2')
      let sourcePath = sandbox.getPath('foo1/bar.txt')
      let targetPath = sandbox.getPath('foo2/bar.txt')
      // ## TEST
      cp(sourcePath, targetPath, (err) => {
        // ## Assert
        expect(err).to.be.null
        expect(targetPath).to.be.a.file().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
        done()
      })
    })
  })
  describe('copy file in new folder', function () {
    it('promise', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar.txt')
      let sourcePath = sandbox.getPath('foo1/bar.txt')
      let targetPath = sandbox.getPath('foo2/bar.txt')
      // ## TEST
      cp(sourcePath, targetPath).then(() => {
        // ## Assert
        expect(targetPath).to.be.a.file().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
      }).then(() => done()).catch(done)
    })
    it('callback', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar.txt')
      let sourcePath = sandbox.getPath('foo1/bar.txt')
      let targetPath = sandbox.getPath('foo2/bar.txt')
      // ## TEST
      cp(sourcePath, targetPath, (err) => {
        // ## Assert
        expect(err).to.be.null
        expect(targetPath).to.be.a.file().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
        done()
      })
    })
  })
  describe('copy folder in same folder', function () {
    it('promise', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo/bar1/f.txt')
      let sourcePath = sandbox.getPath('foo/bar1')
      let targetPath = sandbox.getPath('foo/bar2')
      // ## TEST
      cp(sourcePath, targetPath).then(() => {
        // ## Assert
        expect(targetPath).to.be.a.directory().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
      }).then(() => done()).catch(done)
    })
    it('callback', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo/bar1/f.txt')
      let sourcePath = sandbox.getPath('foo/bar1')
      let targetPath = sandbox.getPath('foo/bar2')
      // ## TEST
      cp(sourcePath, targetPath, (err) => {
        // ## Assert
        expect(err).to.be.null
        expect(targetPath).to.be.a.directory().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
        done()
      })
    })
  })
  describe('copy folder in other folder', function () {
    it('promise', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar/f.txt')
      sandbox.mkdirpSync('foo2')
      let sourcePath = sandbox.getPath('foo1/bar')
      let targetPath = sandbox.getPath('foo2/bar')
      // ## TEST
      cp(sourcePath, targetPath).then(() => {
        // ## Assert
        expect(targetPath).to.be.a.directory().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
      }).then(() => done()).catch(done)
    })
    it('callback', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar/f.txt')
      sandbox.mkdirpSync('foo2')
      let sourcePath = sandbox.getPath('foo1/bar')
      let targetPath = sandbox.getPath('foo2/bar')
      // ## TEST
      cp(sourcePath, targetPath, (err) => {
        // ## Assert
        expect(err).to.be.null
        expect(targetPath).to.be.a.directory().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
        done()
      })
    })
  })
  describe('copy folder in new folder', function () {
    it('promise', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar/f.txt')
      let sourcePath = sandbox.getPath('foo1/bar')
      let targetPath = sandbox.getPath('foo2/bar')
      // ## TEST
      cp(sourcePath, targetPath).then(() => {
        // ## Assert
        expect(targetPath).to.be.a.directory().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
      }).then(() => done()).catch(done)
    })
    it('callback', function (done) {
      // ## Setup
      let sandbox = fsSandbox.newSync()
      sandbox.touchpSync('foo1/bar/f.txt')
      let sourcePath = sandbox.getPath('foo1/bar')
      let targetPath = sandbox.getPath('foo2/bar')
      // ## TEST
      cp(sourcePath, targetPath, (err) => {
        // ## Assert
        expect(err).to.be.null
        expect(targetPath).to.be.a.directory().and.equal(sourcePath)
        // ## Teardown
        fsSandbox.rmSync()
        // ## End
        done()
      })
    })
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
