public class TestLtngApexController {
    
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [select Id,Name,Phone,Type from Account limit 13];
    }
    
    @AuraEnabled
    public static String createContact(Contact contact){
        return 'Success';
    }
}