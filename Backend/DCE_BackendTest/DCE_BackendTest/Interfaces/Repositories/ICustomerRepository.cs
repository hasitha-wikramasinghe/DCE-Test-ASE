using DCE_BackendTest.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DCE_BackendTest.Interfaces.Repositories
{
    public interface ICustomerRepository
    {
        int Create(Customer customer);
        List<Customer> GetAll();
        int Update(Customer customer);
        int Delete(Guid userId);
    }
}
