<div align='center'>

# Checkmarks

An industry project <strong>by:</strong> Tilman, Vlad, Fatma, Karen, Kalvin

<!-- <strong>Live Link: </strong> here  -->

</div>

## Overview

<i>Checkmarks is a trademark search and registration form web app! </i>

<i><strong>Objectiive: </strong> The project scope is to enhance the landing page while maintaining clients ability to manage the layout page, enhance a word-mark search to match more on a robust set of criteria, and enhance the trademark registration process with live data, additional fields, and additional functionality while maintaining existing integration with LawPay and Clio. </i>
</br>

## Workflows

### Word-Mark Search Function work flow

- User lands on checkmarks.ca (wordPress landing page).
- User searches for an exact plain word trademark.
- Search function fetches data form a static database with data copied from Canadian Trademarks Database (Cipo).
- Data is returned as results that show exact matches of plain word trademarks only.

### Trademark Application work flow

- User Clicks on Register Trademark from the main webpage.
- User is dierect to a multi-page form.
- User uses "Goods and Services" selector to add various government pre-approved goods and/or services to the User's application. Based on selected goods/services, the government application fee is automatically adjusted.
- User completes multi-page form and is direct to a payment page.
- user complets payment, pamemnt held in lawyers's trust account until application is complete.
- pre-paid application is email to reviewing lawyer/trademark agent.

 </br>

## Tech Stack

- <strong>Front-end:</strong> React
- <strong>Back-end:</strong>.NET Core(back-end)
- <strong>Deployment: </strong>

  </br>

## Documentation

Checkmarks back-end repository can be seen [here](https://github.com/BCIT-SSD-2020-21/industry-project-checkmarks_backend)

### Essential Features

- Create a new landing page that will expost both Word-Mark Search and Trademark Registration workflows.
- Enhance the Word-Mark Search to pull real-time data or create an automated process that will update the static data nightly.
- Modify or re-create the existing Trademark Application form to function better:
  - enhanced user experience
  - allow multiple file uploads
  - include mandatory upload of a government issued ID
  - Integrate new payment packages to the existing LawPay payment processing system

### Nice to have Features

- Add functionality to "read" a trademark logo to determine the relevant Vienna classification/ info.
- Integrate with the Canadian TradeMarks Database to create or update the Vienna Classification data.

### Figma Prototypes

<!-- Images URL -->

### ER Diagram

### Use Case Diagram (<a link="https://www.figma.com/file/RH0Ymf55Rw6M7UCZY7ly33/Checkmarks_UseCaseDiagram?node-id=0%3A1">Figma</a>)

<img src="https://i.imgur.com/OsEGEQ9.jpg" width="500px"/>

<!-- Images URL -->

</br>

## Running the app

<details>
<summary>:zap: Quick start instructions here</summary>

- clone this repo
- `npm i`
- `npm start`

</details>

</br>

## Resources/References

</br>
