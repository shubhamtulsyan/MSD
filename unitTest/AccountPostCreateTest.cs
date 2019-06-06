using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FakeItEasy;
using FakeXrmEasy;
using Microsoft.Xrm.Sdk;
using HSBC.AMG.Plugins;
using Microsoft.Xrm.Sdk.Query;

namespace unitTest
{
    [TestClass]
    public class AccountPostCreateTest
    {
        [TestMethod]
        public void AccPostCreateTest()
        {
            var fakeContext = new XrmFakedContext();

            Entity acc = new Entity("account");
            acc.Id = Guid.NewGuid();
            acc.Attributes.Add("name", "ABC Ltd");

            var fakeService = fakeContext.GetOrganizationService();

            fakeContext.ExecutePluginWithTarget<AccountPostCreate>(acc, "Create", 40);

            //retrieve task record
            QueryExpression query = new QueryExpression("task");
            query.ColumnSet.AddColumn("subject");
            
            EntityCollection col = fakeService.RetrieveMultiple(query);

            Assert.IsTrue(col.Entities.Count == 1);
        }
    }
}
