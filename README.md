# ryanchristo

## Technology Stack

- MongoDB 3.6.2

## Setup Instructions

### setup local development environment:
- run `yarn watch`
- open new tab in terminal
- run `yarn start`

### access MongoDB from remote server:
- run `ssh ryanchristo`
- on remote server, run `mongo -u ryanchristo -p --authenticationDatabase admin`

### access MongoDB from local computer:
- (firewall is enabled on server only allowing access from ryanchristo-macbookpro)
- run `mongo -u ryanchristo -p --authenticationDatabase admin --host 159.89.149.244`

### deploy to production:
- run `git remote add server ryanchristo@159.89.149.244:repos/ryanchristo.git`
- run `git push server master`
