assert   = require 'assert'
{validate} = require '../lib'


describe '07-validation', ->

  it 'should return `true` for valid data', ->
    assert validate
      id: 1
      name: 'John Doe'
      email: 'foo@bar.com'
      taxRate: 0.1
      favouriteColour: '#ccccff'
      interests: ["cycling", "programming"]

  it 'should return `false` for invalid data: name', ->
    assert !validate
      id: 1
      name: 2 # <--- problem
      email: 'foo@bar.com'
      taxRate: 0.1
      favouriteColour: '#ff6'
      interests: ["cycling", "programming"]

  it 'should return `false` for invalid data: email', ->
    assert !validate
      id: 1
      name: 'John Doe'
      email: 'foo@bar@baz.com' # <--- problem
      taxRate: 0.1
      favouriteColour: '#ff6'
      interests: ["cycling", "programming"]

  it 'should return `false` for invalid data: id', ->
    assert !validate
      id: -5 # <--- problem
      name: 'John Doe'
      email: 'foo@bar.com'
      taxRate: 0.1
      favouriteColour: '#ff6'
      interests: ["cycling", "programming"]

  it 'should return `false` for invalid data: favouriteColour', ->
    assert !validate
      id: 1
      name: 'John Doe'
      email: 'foo@bar.com'
      taxRate: 0.1
      favouriteColour: '#ccccffx' # <--- problem
      interests: ["cycling", "programming"]

  it 'should return `false` for invalid data: taxRate', ->
    assert !validate
      id: 10
      name: 'John Doughlas'
      email: 'footy@bar.com'
      taxRate: 2 # <--- problem
      favouriteColour: '#ff7'
      interests: ["walking", "programming"]

  it 'should return `false` for invalid data: interests', ->
    assert !validate
      id: 10
      name: 'John Doughlas'
      email: 'footy@bar.com'
      taxRate: 0.3 
      favouriteColour: '#ff6'
      interests: ["walking", "programming", "hiking", "painting", "snowboarding"] # <--- problem

  it 'should return `false` for invalid data: favouriteColour', ->
    assert !validate
      id: 10
      name: 'John Doughlas'
      email: 'footy@bar.com'
      taxRate: 0.3 
      favouriteColour: '#abc'
      interests: ["walking", "programming" ] 
