$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/calculator.feature");
formatter.feature({
  "name": "arithmetic operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "client wants to add two numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the client calls /calc/add with values 1 and 2",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_calls_arithmetic_add_with_values_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives answer as 37",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_receives_answer_as(int)"
});
formatter.result({
  "error_message": "org.opentest4j.AssertionFailedError: expected: \u003c37\u003e but was: \u003c3\u003e\r\n\tat org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:55)\r\n\tat org.junit.jupiter.api.AssertionUtils.failNotEqual(AssertionUtils.java:62)\r\n\tat org.junit.jupiter.api.AssertEquals.assertEquals(AssertEquals.java:150)\r\n\tat org.junit.jupiter.api.AssertEquals.assertEquals(AssertEquals.java:145)\r\n\tat org.junit.jupiter.api.Assertions.assertEquals(Assertions.java:510)\r\n\tat com.cucumber.mainDemo.controller.CalculatorStepDefinitions.the_client_receives_answer_as(CalculatorStepDefinitions.java:22)\r\n\tat ✽.the client receives answer as 37(classpath:features/calculator.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "client wants to subtract two numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the client calls /calc/sub with values 5 and 3",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_calls_calc_sub_with_values_and(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives answer as 2",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_receives_answer_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "client wants to divide two numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the client calls /calc/div with values 6 and 2",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_calls_calc_div_with_values_and(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives answer as 3",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_receives_answer_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "client wants to multiply two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the client calls /calc/mul with values \u003cnumber1\u003e and \u003cnumber2\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the client receives answer as \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number1",
        "number2",
        "result"
      ]
    },
    {
      "cells": [
        "2",
        "3",
        "6"
      ]
    },
    {
      "cells": [
        "4",
        "6",
        "24"
      ]
    },
    {
      "cells": [
        "7",
        "8",
        "56"
      ]
    }
  ]
});
formatter.scenario({
  "name": "client wants to multiply two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the client calls /calc/mul with values 2 and 3",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_calls_calc_mul_with_values_and(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives answer as 6",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_receives_answer_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "client wants to multiply two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the client calls /calc/mul with values 4 and 6",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_calls_calc_mul_with_values_and(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives answer as 24",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_receives_answer_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "client wants to multiply two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the client calls /calc/mul with values 7 and 8",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_calls_calc_mul_with_values_and(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives answer as 56",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorStepDefinitions.the_client_receives_answer_as(int)"
});
formatter.result({
  "status": "passed"
});
});