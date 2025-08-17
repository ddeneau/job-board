import { defineAuth } from '@aws-amplify/backend';
import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
    UserProfile: a.model({
        id: a.id().required(),                 // will be set to Cognito sub
        username: a.string().required(),       // taken from Cognito
        bio: a.string(), // app-specific field
    }).authorization(allow => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: "userPool",
    },
});

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
