import {
  CreateSecretCommand,
  SecretsManagerClient,
  type GetSecretValueCommandOutput,
} from "@aws-sdk/client-secrets-manager";

export function createSecretsMangerClient() {
  return new SecretsManagerClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
  });
}
