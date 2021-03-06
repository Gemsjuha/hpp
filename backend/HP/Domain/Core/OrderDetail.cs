﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HP.Domain.Core
{
    class OrderDetail
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        public double Price { get; set; }

        public virtual Order Order { get; set; }
    }
}
