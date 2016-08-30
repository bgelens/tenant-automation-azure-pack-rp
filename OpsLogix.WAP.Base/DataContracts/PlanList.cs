﻿//------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//------------------------------------------------------------

using System.Collections.Generic;
using System.Runtime.Serialization;

namespace OpsLogix.WAP.Base.DataContracts
{
    /// <summary>
    /// Represents a plan list.
    /// </summary>
    [CollectionDataContract(Namespace = "http://schemas.microsoft.com/windowsazure", Name = "Plans", ItemName = "Plan")]
    public class PlanList : List<Plan>
    {
    }
}
