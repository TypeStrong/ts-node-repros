import {foo} from '@mailchimp/mailchimp_marketing';

try {
    console.log(foo.indexOf('f'));
} catch(e) {
    // we expect to get a runtime error because mailchimp_marketing does not actually export `foo`
    // The import thing is that typechecking succeeds
}