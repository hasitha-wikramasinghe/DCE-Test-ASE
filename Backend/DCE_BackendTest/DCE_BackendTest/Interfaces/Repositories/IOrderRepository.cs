using DCE_BackendTest.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DCE_BackendTest.Interfaces.Repositories
{
    public interface IOrderRepository
    {
        List<OrderDTO> GetActiveOrdersByCustomer(Guid CustomerId);
    }
}
