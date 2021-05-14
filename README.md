<div align='center'>

# Checkmarks

[(Netlify Deployment)](https://gracious-jepsen-1b653c.netlify.app)

An industry project <strong>by:</strong> Tilman, Vlad, Fatma, Karen, Kalvin

<!-- <strong>Live Link: </strong> here  -->

</div>

## Overview

<i>Checkmarks is a trademark search and registration form web app! </i>

<i><strong>Objective: </strong> The project scope is to enhance the landing page while maintaining clients ability to manage the layout page, enhance a word-mark search to match more on a robust set of criteria, enhance the trademark registration process with live data, additional fields, and additional functionality while maintaining existing integration with Law Pay and Clio. </i>
</br>

## Workflows

### Word-Mark Search Function work flow

-   User lands on checkmarks.ca (wordPress landing page).
-   User searches for an exact plain word trademark.
-   Search function fetches data form a static database with data copied from Canadian Trademarks Database (Cipo).
-   Data is returned as results that show exact matches of plain word trademarks only.

### Trademark Application work flow

-   User Clicks on Register Trademark from the main webpage.
-   User is dierect to a multi-page form.
-   User uses "Goods and Services" selector to add various government pre-approved goods and/or services to the User's application. Based on selected goods/services, the government application fee is automatically adjusted.
-   User completes multi-page form and is direct to a payment page.
-   user complets payment, pamemnt held in lawyers's trust account until application is complete.
-   pre-paid application is email to reviewing lawyer/trademark agent.

 </br>

## Tech Stack

-   <strong>Front-end:</strong> React
-   <strong>Back-end:</strong>.NET Core(back-end)
-   <strong>Deployment: </strong>

    </br>

## Documentation

Checkmarks back-end repository can be seen [here](https://github.com/BCIT-SSD-2020-21/industry-project-checkmarks_backend)

### Essential Features

-   Create a new landing page that will expost both Word-Mark Search and Trademark Registration workflows.
-   Enhance the Word-Mark Search to pull real-time data or create an automated process that will update the static data nightly.
-   Modify or re-create the existing Trademark Application form to function better:
    -   enhanced user experience
    -   allow multiple file uploads
    -   include mandatory upload of a government issued ID
    -   Integrate new payment packages to the existing LawPay payment processing system

### Nice to have Features

-   Add functionality to "read" a trademark logo to determine the relevant Vienna classification/ info.
-   Integrate with the Canadian TradeMarks Database to create or update the Vienna Classification data.

### Figma Prototypes [(View on Figma)]("https://www.figma.com/file/7NR2yH2BINwQlmqxNspD1f/Checkmarks_Prototype?node-id=0%3A1")

<img src="https://i.imgur.com/N11dFZC.jpg" width="500px"/>

### Use Case Diagram [(View on Figma)](https://www.figma.com/file/RH0Ymf55Rw6M7UCZY7ly33/Checkmarks_UseCaseDiagram?node-id=0%3A1)

<img src="https://i.imgur.com/OsEGEQ9.jpg" width="500px"/>

### Entity Relationship Diagram [(View on Figma)](https://www.figma.com/file/TtxwukepFAnA06lk5HaXL4/Untitled?node-id=0%3A1)

<img src="https://i.imgur.com/cZuLNdm.jpg" width="500px"/>

</br>

## Running the app

<details>
<summary>:zap: Quick start instructions here</summary>

-   clone this repo
-   `npm i`
-   `npm start`
-   `add a .env file to the root folder`
-   `add the following variables: `

```
REACT_APP_BASE_URL=https://checkmarkswebapirev.azurewebsites.net/
REACT_APP_AFFINIPAY_PUBLIC_KEY={Affinipay_hostedFieldsConfiguration_public_key}
REACT_APP_TRUST_ACCOUNT_ID={Trust_Account_Id}
```

</details>

</br>

## Integrations

# Clio

[Full Clio Documentation](https://app.clio.com/api/v4/documentation#operation/Contact#create)
Clio is a CRM for Law Firms and Professionals.
The Checkmarks back-end is connected to the Clip API to create <b>Contacts</b> and <b>Matters</b> based on the Trademark Applicant's input data.

The integration is achieved as follows:

### 1. OAuth Workflow:

-   Request authorization code from Clio by inputting the following Url into the browser:

```
https://app.clio.com/oauth/authorize?response_type=code&client_id={app_key}&redirect_uri={your_site_url}/
```

-   The above link should redirect to the 'redirect_uri', with the following string appended to the Url:

```
{your_site_url}/?code={authorization_code}
```

-   In Postman:

```
POST https://app.clio.com/oauth/token?client_id={app_key}&client_secret={app_secret}&grant_type=authorization_code&code={authorization_code}&redirect_uri={your_site_url}
```

The response will include:

```
access_token (used as bearer token for requests to Clio)
refresh_token
token_type (bearer)
expires_in (30 days)
```

### 2. Endpoints used:

-   Create Contact:

```
POST https://app.clio.com/api/v4/contacts.json
Authorization: Bearer {access_token}
Body:  // (required only - see Clio docs for details)
{
    "data": {
        "first_name": "Johnny",
        "last_name": "Bravo",
        "type": "Person"
    }
}
Result:
{
    "data": {
        "id": {contact_id},
        "name": "Johnny Bravo",
        "initials": "JB",
        "type": "Person",
        "etag": "\"57527d0a60938ea56a68f6d0d2c36334\""
    }
}
```

-   Create Matter:

```
POST https://app.clio.com/api/v4/matters.json
Authorization: Bearer {access_token}
Body:  // (required only - see Clio docs for details)
{
  "data": {
        "description": "do.. you know, the thing",
        "client": {
            "id": {contact_id}
        }
  }
}
Result:
{
    "data": {
        "id": {matter_id},
        "display_number": "00002-Smith",
        "etag": "\"4d507aeb60938f116a68f6d0d2c36334\""
}
}

# Law Pay

## Resources/References

</br>
```
