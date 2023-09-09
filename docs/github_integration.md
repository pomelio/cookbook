---
id: github_integration
---
# Github repository integration
> The project is hosted by user's github repository. The project can be imported into the platform. The project is linked with github reposity by the github `webhook` and `access token`.

## Github acess token generation

> The `access token` enables the platform to read the resources of the github repository. Public projects can also be read without tokens, but because Github has a very low `Rate limit` for anonymous access, 50 times per hour. This limit is too low. Therefore, even for public projects, the platform still needs `access tokens` to read the resources of the repository.


- Generate an `access_token` from [personal-access-tokens](https://github.com/settings/personal-access-tokens/new)
- Put the `Expiration` long enough, because the platform needs to sync github resources through this access token
- Select the project, only allow to read the resources of the Reposit you specify
- Grant Permissions, Contents read-only permission
- Generate `acess token` and save it

![webhook](/public/images/access_token_repository.png)

![webhook](/public/images/access_token_content_readonly.png)

## Webhook notifications

> The platform provides a webhook link for each project. You can set this link to the webhook of the github repository. In this way, when the Repository has a git push message, the system will be notified. In this way, the system can also update the corresponding program. Keep the platform's program and Github in sync.


- Set the `content Type` of the webhook to `application/json`
- Save the `Secret`. This secret is used for webhook signature verification

![webhook](/public/images/webhook.png)
