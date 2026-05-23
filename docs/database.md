# Omnitrix Database Setup

Use MongoDB Atlas for the live Vercel deployment.

## Vercel Environment Variables

Add these in Vercel Project Settings > Environment Variables:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=omnitrix
MONGODB_CONTACT_COLLECTION=contact_submissions
```

Redeploy the Vercel project after adding or changing environment variables.

## Contact Submission Schema

Collection: `contact_submissions`

```ts
{
  _id: ObjectId,
  name: string,
  email: string,
  phone?: string,
  company?: string,
  budget?: string,
  projectType?: string,
  message: string,
  page?: string,
  referrer?: string,
  userAgent?: string,
  ip?: string,
  source: "website",
  status: "new",
  createdAt: Date,
  updatedAt: Date
}
```

## Indexes

The API creates these indexes automatically on first successful submission:

- `createdAt_desc`
- `email_createdAt`
- `status_createdAt`
- `projectType_createdAt`

## MongoDB Atlas Network Access

For Vercel, allow access from Vercel serverless functions. The simplest Atlas setting is `0.0.0.0/0`, protected by a strong database username/password. For stricter production security, use Vercel Secure Compute or a provider/network setup with stable egress IPs.
