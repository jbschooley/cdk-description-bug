import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cfn_inc from "aws-cdk-lib/cloudformation-include";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDescriptionBugStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const cfnInclude = new cfn_inc.CfnInclude(this, 'CdkDescriptionBugCfnInclude', {
      templateFile: 'lib/test-s3-stack.yaml'
    })

    // this.templateOptions.description = 'Updated description'
  }
}
