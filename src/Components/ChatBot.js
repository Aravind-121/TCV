import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function MyChatBot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };

  const theme = {
    background: "#111",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#474787",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#706fd3",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome.",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please type your Name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking symptoms msg"
    },
    {
      id: "Asking symptoms msg",
      message: "Hi {previousValue}, Are your experiencing any of the following symptoms?",
      trigger: "Asking symptoms"
    },
    {
      id: "Asking symptoms",
      options: [
        {
          value: "Cough",
          label: 'Cough',
          trigger: "Ask age msg"
        },
        { value: "Fever",label: "Fever", trigger: "Ask age msg" },
        { value:"Difficulty in breathing",label: "Difficulty in breathing", trigger: "Ask age msg" },
        { value:"None of the above", label: "None of the above", trigger: "gud-news" }
      ]
    },
    {
      id: "gud-news",
      message:
        "Your infection risk is low,We recommend to stay safe and practice social distancing",
      trigger: "Done"
    },
    {
      id: "Ask age msg",
      message: "Type your age",
      trigger: "Ask age"
    },
    {
      id: "Ask age",
      options: [
        { value: "Above 55", label: "Above 55", trigger: "Ask international visit msg" },
        { value: "Below 55", label: "Below 55", trigger: "Ask international visit msg" }
      ]
    },
    {
      id: "Ask international visit msg",
      message: "Did you travel internationally 20 days-30 days before?",
      trigger: "Ask international visit"
    },
    {
      id: "Ask international visit",
      options: [
        { value: "Yes", label: "Yes", trigger: "Ask interaction msg" },
        { value: "No", label: "No", trigger: "Ask interaction msg" }
      ]
    },
    {
      id: "Ask interaction msg",
      message: "Have you interacted with anyone who has tested positive for Covid-19?",
      trigger: "Ask interaction"
    },
    {
      id: "Ask interaction",
      options: [
        { value: "Yes", label: "Yes", trigger: "safety-msg" },
        { value: "No", label: "No", trigger: "safety-msg" }
      ]
    },
    {
      id: "safety-msg",
      message: "You have a chance of getting affected by the virus, So please stay at home, Do strict self-quarantine for upto 14days and please do seek for medical attention",
      end: true
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default MyChatBot;