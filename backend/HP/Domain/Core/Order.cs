using System;
using System.Collections.Generic;

namespace HP.Domain.Core
{
    public class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        
        public DateTime Date { get; set; }
        
        public double TotalPrice { get; set; }
        
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
