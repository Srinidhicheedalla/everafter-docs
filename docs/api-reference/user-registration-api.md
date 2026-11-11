---
title: User Registration API
description: Sample API reference for user registration in EverAfter
---

# User Registration API

## 1. Overview

This document describes a sample API endpoint for creating a new EverAfter user account.

**Important:** This is an illustrative API specification for the documentation portfolio. It is not a verified or implemented API.

## 2. Endpoint Details

| Property | Value |
|---|---|
| Endpoint | `/api/register` |
| HTTP Method | `POST` |
| Content Type | `application/json` |
| Purpose | Create a new user account |

## 3. Request Parameters

The following information is expected in the sample request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| name | String | Yes | User's full name |
| email | String | Yes | User's email address |
| password | String | Yes | Account password |

## 4. Sample Request

```json
{
  "name": "Priya",
  "email": "priya@example.com",
  "password": "ExamplePassword123"
}
```

## 5. Sample Success Response

**HTTP Status Code:** `201 Created`

```json
{
  "message": "User registered successfully",
  "status": "success"
}
```

## 6. Error Responses

| Status Code | Meaning | Suggested Action |
|---|---|---|
| 400 | Invalid request | Check the submitted information |
| 409 | Email already exists | Use a different email address |
| 500 | Internal server error | Try again later or contact support |

## 7. Validation Rules

- Name must not be empty.
- Email must follow a valid email format.
- Password must meet the application's password requirements.

## 8. Security Considerations

- Always use HTTPS when transmitting account information.
- Never store passwords as plain text.
- Do not expose passwords in API responses.
- Validate user input before processing requests.

## 9. Expected Result

When valid registration information is submitted, the sample API should return a success response indicating that the account was created.
