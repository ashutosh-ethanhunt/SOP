// SOP Data — Reliance Retail Operations
const SOP_DATA = [
  {
    "id": "inventory",
    "pillar": "01",
    "name": "Inventory",
    "description": "Inward processes, DC/IST handling, GRN generation, and replenishment control",
    "sopCount": 40,
    "processes": [
      {
        "name": "Inward Process",
        "topics": [
          {
            "name": "Inward & GRN against STN for DC/IST",
            "subtopics": [
              {
                "name": "Unloading Process against TRIP/STN - consignment delivery at store by DC Vehicle.",
                "sopNum": 1
              },
              {
                "name": "Unloading Process against TRIP/STN- consignment delivery at store by Express Courier.",
                "sopNum": 2
              },
              {
                "name": "Unloading Process-GRN Against TRIP/STN",
                "sopNum": 3
              },
              {
                "name": "GRN against STN Process- consignment delivered by DC Vehicle or by Courier",
                "sopNum": 4
              }
            ]
          },
          {
            "name": "Inward & GRN against PO for DSD",
            "subtopics": [
              {
                "name": "Inward & GRN against PO for Direct Store Delivery by Courier ,SAP GRN Process against PO for DSD – EB Merchandise/ Consumables/ VM & Marketing Material-TRIP Creation,Handling DSD INF Process",
                "sopNum": 5
              },
              {
                "name": "GST INVOICE Checking Format",
                "sopNum": 6
              }
            ]
          },
          {
            "name": "SAP Process for Inwards/ Printing of TPOD DURING DC or IST –GRN",
            "subtopics": [
              {
                "name": "SAP Process for TPOD Generation",
                "sopNum": 7
              }
            ]
          },
          {
            "name": "SAP Process for  DC or IST –GRN",
            "subtopics": [
              {
                "name": "SAP GRN Process against STN for DC/ IST/",
                "sopNum": 8
              }
            ]
          },
          {
            "name": "EPC GRN and Consumption",
            "subtopics": [
              {
                "name": "EPC  GRN and Consumption Booking Process",
                "sopNum": 34
              },
              {
                "name": "Type the T-code – ZPSGI(If Company code is 9008 use ZPSGI)",
                "sopNum": 35
              },
              {
                "name": "Enter the t-code : MB1A and press enter(If company code is NP01)",
                "sopNum": 36
              }
            ]
          }
        ]
      },
      {
        "name": "Replenishment Process",
        "topics": [
          {
            "name": "Tagging Process",
            "subtopics": [
              {
                "name": "Tagging Process-Introduction,Scope ,Work Process",
                "sopNum": 9
              },
              {
                "name": "Tagging Process-Security Tag Management Process",
                "sopNum": 10
              },
              {
                "name": "Tagging Process-Hard and Soft Tag Usage Process,Caution",
                "sopNum": 11
              },
              {
                "name": "Hard and Soft Tag Process Control, BOH -Hard & Soft Tag- Movement Register and Footwear Tagging Process",
                "sopNum": 12
              }
            ]
          },
          {
            "name": "D2F- Door to Floor",
            "subtopics": [
              {
                "name": "D2F- Door to Floor and Dynamic Replenishment",
                "sopNum": 13
              }
            ]
          }
        ]
      },
      {
        "name": "Outward Process",
        "topics": [
          {
            "name": "GRDC/IST",
            "subtopics": [
              {
                "name": "Preparation for GRDC:",
                "sopNum": 14
              },
              {
                "name": "Outwarding – GRDC/IST Work Flow",
                "sopNum": 15
              },
              {
                "name": "Outward GRDC & IST SAP Process-(TILL STO Creation,STO Edit ,STO View,Stock Correction Process )",
                "sopNum": 16
              },
              {
                "name": "Stock Correction Process and Packing Guidelines",
                "sopNum": 17
              },
              {
                "name": "Outward GRDC & IST SAP Process-(From Delivery Creation Till Trip Creation",
                "sopNum": 18
              },
              {
                "name": "TCN Request Format",
                "sopNum": 19
              },
              {
                "name": "E-WAY Bill Process:",
                "sopNum": 20
              },
              {
                "name": "Loading Process-GRDC/IST",
                "sopNum": 21
              }
            ]
          },
          {
            "name": "GRDC Process",
            "subtopics": [
              {
                "name": "HU Based GRDC",
                "sopNum": 22
              }
            ]
          },
          {
            "name": "IST Process",
            "subtopics": [
              {
                "name": "HU Based IST",
                "sopNum": 23
              }
            ]
          },
          {
            "name": "RTV Process",
            "subtopics": [
              {
                "name": "RTV & RSO",
                "sopNum": 24
              }
            ]
          }
        ]
      },
      {
        "name": "Ajio - Omni Channel Process",
        "topics": [
          {
            "name": "Ajio - Omni Channel Inventory movement",
            "subtopics": [
              {
                "name": "Ajio - Omni Channel – Ship from Stores",
                "sopNum": 25
              }
            ]
          }
        ]
      },
      {
        "name": "BOH Management Process",
        "topics": [
          {
            "name": "Inventory Hygiene",
            "subtopics": [
              {
                "name": "Ageing and Managing Fill",
                "sopNum": 26
              },
              {
                "name": "Managing Bad Inventory",
                "sopNum": 27
              },
              {
                "name": "Dump Process - Damaged & Expired - Non-Apps & Footwear Merchandise",
                "sopNum": 28
              },
              {
                "name": "Stock in Transit (SIT) Management",
                "sopNum": 31
              },
              {
                "name": "SLOC TO SLOC Transfer (SAP Process)",
                "sopNum": 32
              },
              {
                "name": "Stock Correction Process",
                "sopNum": 33
              },
              {
                "name": "Handling Defective Stocks at Stores, Handling of Damaged/Defective/Expired Private Label Deos,Perfumes & Cosmetics",
                "sopNum": 37
              },
              {
                "name": "Handling Loose Pieces at Stores",
                "sopNum": 38
              },
              {
                "name": "Handling WBC",
                "sopNum": 39
              }
            ]
          },
          {
            "name": "BOH Hygiene Process",
            "subtopics": [
              {
                "name": "BOH Hygeine",
                "sopNum": 40
              }
            ]
          }
        ]
      },
      {
        "name": "Global Count Process",
        "topics": [
          {
            "name": "Inventory Hygiene",
            "subtopics": [
              {
                "name": "Global Count Process",
                "sopNum": 29
              }
            ]
          }
        ]
      },
      {
        "name": "Perpetual Inventory Process",
        "topics": [
          {
            "name": "PI Process",
            "subtopics": [
              {
                "name": "PI Process",
                "sopNum": 30
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mod-commercial",
    "pillar": "02",
    "name": "MOD Commercial",
    "description": "Cash & banking processes, POS cashiering controls, gift billing execution, and audits",
    "sopCount": 56,
    "processes": [
      {
        "name": "Cash and Banking",
        "topics": [
          {
            "name": "POS Cashiering Process",
            "subtopics": [
              {
                "name": "POS - Technical Training and Screenshots-Login Page, Bill Making Process, MOP",
                "sopNum": 86
              },
              {
                "name": "POS - Technical Training and Screenshots-Gift Billing Process",
                "sopNum": 87
              },
              {
                "name": "POS - Technical Training and Screenshots-Exchange Process",
                "sopNum": 88
              },
              {
                "name": "Manual Billing",
                "sopNum": 89
              },
              {
                "name": "POS Invoice Process",
                "sopNum": 90
              },
              {
                "name": "EOD Batch Settlement Process",
                "sopNum": 91
              },
              {
                "name": "AJIO B2B Cash Collection",
                "sopNum": 92
              },
              {
                "name": "Offline Billing Process",
                "sopNum": 141
              }
            ]
          },
          {
            "name": "Handling Float Cash & Cashier Declaration Process",
            "subtopics": [
              {
                "name": "Process to be done in R Office Portal",
                "sopNum": 93
              },
              {
                "name": "Cash Pick up process",
                "sopNum": 94
              },
              {
                "name": "Card Pick up process",
                "sopNum": 95
              },
              {
                "name": "PAYTM Pick up process",
                "sopNum": 96
              },
              {
                "name": "Cashier Declaration Steps (Post “Pickup” process of all the MOPs for all Cashiers for the day)",
                "sopNum": 97
              },
              {
                "name": "Cashier Summary Report",
                "sopNum": 98
              },
              {
                "name": "Cash Movement Summary",
                "sopNum": 99
              }
            ]
          },
          {
            "name": "MOP Change process",
            "subtopics": [
              {
                "name": "MOP Change Process",
                "sopNum": 100
              }
            ]
          },
          {
            "name": "PIS Process",
            "subtopics": [
              {
                "name": "Process of Pay in Slip (PIS) and DMS",
                "sopNum": 101
              }
            ]
          },
          {
            "name": "Bill Cancellations & Credit Note Cancellations",
            "subtopics": [
              {
                "name": "What is Bill Cancellation?",
                "sopNum": 102
              },
              {
                "name": "When Should Bill Cancellation be done?",
                "sopNum": 103
              },
              {
                "name": "How to requesr for Bill/ Credit Note Cancellation?",
                "sopNum": 104
              },
              {
                "name": "For Credit Note Cancellation",
                "sopNum": 105
              },
              {
                "name": "Process in Service Desk Portal: Refer Annexure 1.",
                "sopNum": 106
              }
            ]
          },
          {
            "name": "Handling Customer Complaint/ Chargeback Cases",
            "subtopics": [
              {
                "name": "Handling Customer Complaint",
                "sopNum": 107
              },
              {
                "name": "What is Chargeback?",
                "sopNum": 108
              },
              {
                "name": "Reasons for the Chargeback",
                "sopNum": 109
              },
              {
                "name": "What should store do, When Chargeback cases are received from HO?",
                "sopNum": 110
              }
            ]
          }
        ]
      },
      {
        "name": "Imprest Policy",
        "topics": [
          {
            "name": "Store Imprest",
            "subtopics": [
              {
                "name": "Objective",
                "sopNum": 111
              },
              {
                "name": "Process for the Initial Imprest and Float Cash Payment",
                "sopNum": 112
              },
              {
                "name": "Process for Initial Imprest and Float Cash Payment - cluster manger rights and Pre-requisites",
                "sopNum": 113
              },
              {
                "name": "Types & Limits of Expenses Allowed to be claimed",
                "sopNum": 114
              },
              {
                "name": "Entering of Expenses & Approval in SAP",
                "sopNum": 115
              },
              {
                "name": "Approval of Cash Expenses by Cluster Manager entered by Store Manager/ C&A (Posting)",
                "sopNum": 116
              },
              {
                "name": "Records to be kept with respect to Imprest Cash Vouchers",
                "sopNum": 117
              },
              {
                "name": "Records to be made available to Auditors during verification",
                "sopNum": 118
              },
              {
                "name": "Actions for not following the Imprest Policy",
                "sopNum": 119
              },
              {
                "name": "Process at the time of Store manager Resignation/ Termination/ Transfer",
                "sopNum": 120
              },
              {
                "name": "Pre- Operative Expenses Process (Expenses incurred before Store opening date captured in DSS)",
                "sopNum": 121
              }
            ]
          }
        ]
      },
      {
        "name": "Rent & Cam Process",
        "topics": [
          {
            "name": "Rent & Cam",
            "subtopics": [
              {
                "name": "Process Note - Rent & Cam",
                "sopNum": 122
              },
              {
                "name": "Step by Step procedure to follow to make a Scroll.",
                "sopNum": 123
              },
              {
                "name": "User Manual and Checklist -Scrolling process",
                "sopNum": 124
              },
              {
                "name": "Rejection Scenarios?",
                "sopNum": 125
              }
            ]
          }
        ]
      },
      {
        "name": "Utility Bills Process",
        "topics": [
          {
            "name": "Utility Bills and Vendor Codes",
            "subtopics": [
              {
                "name": "Utility process",
                "sopNum": 126
              },
              {
                "name": "Utility (Electricity, HVAC, Telephone, Internet & Water)",
                "sopNum": 127
              },
              {
                "name": "For Non-Government Vendors (Airtel / Vodafone Etc.)-Till Bank Details",
                "sopNum": 128
              },
              {
                "name": "For Non-Government Vendors (Airtel / Vodafone Etc.)-Master Updation Process",
                "sopNum": 129
              },
              {
                "name": "Creation of Utility Scroll for EB,AC",
                "sopNum": 130
              },
              {
                "name": "Creation of Utility Scroll for TE: Below are the Steps to Create a Scroll against Utility Vendor for the Bill Types - Telephone & Internet (TE)",
                "sopNum": 131
              },
              {
                "name": "DMS Process of Utility Scroll:",
                "sopNum": 132
              },
              {
                "name": "Generation of Scroll Report",
                "sopNum": 133
              },
              {
                "name": "User Manual for Non - merchandise vendor Registration",
                "sopNum": 134
              }
            ]
          }
        ]
      },
      {
        "name": "Service Entry",
        "topics": [
          {
            "name": "Service Entry",
            "subtopics": [
              {
                "name": "Service Entry",
                "sopNum": 135
              }
            ]
          }
        ]
      },
      {
        "name": "Scrap Policy",
        "topics": [
          {
            "name": "Scrap of Asset Policy",
            "subtopics": [
              {
                "name": "Scrap of Assets",
                "sopNum": 136
              }
            ]
          },
          {
            "name": "Scrap Sale Process",
            "subtopics": [
              {
                "name": "Scrap Sale Process",
                "sopNum": 137
              }
            ]
          }
        ]
      },
      {
        "name": "Asset Transfer Process",
        "topics": [
          {
            "name": "Asset Transfer",
            "subtopics": [
              {
                "name": "Asset Transfer - TBD",
                "sopNum": 138
              }
            ]
          }
        ]
      },
      {
        "name": "HOTO Process",
        "topics": [
          {
            "name": "HOTO",
            "subtopics": [
              {
                "name": "HOTO Process",
                "sopNum": 139
              }
            ]
          }
        ]
      },
      {
        "name": "License Checklist",
        "topics": [
          {
            "name": "License Checklist",
            "subtopics": [
              {
                "name": "License Checklist",
                "sopNum": 140
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "people",
    "pillar": "03",
    "name": "People",
    "description": "Ethics, structure protocols, recruitment frameworks, career progression mapping",
    "sopCount": 45,
    "processes": [
      {
        "name": "Company Cores Standard",
        "topics": [
          {
            "name": "F&L Values and Ethics",
            "subtopics": [
              {
                "name": "Values and Ethics",
                "sopNum": 41
              }
            ]
          }
        ]
      },
      {
        "name": "F&L Structure",
        "topics": [
          {
            "name": "Structure at Trends",
            "subtopics": [
              {
                "name": "Structure at NHQ",
                "sopNum": 42
              },
              {
                "name": "Importance of People in Stores",
                "sopNum": 43
              },
              {
                "name": "Structure at State",
                "sopNum": 44
              },
              {
                "name": "Structure at Store",
                "sopNum": 45
              }
            ]
          }
        ]
      },
      {
        "name": "Recruitment",
        "topics": [
          {
            "name": "Grooming Standards",
            "subtopics": [
              {
                "name": "Grooming Standards",
                "sopNum": 46
              }
            ]
          },
          {
            "name": "Uniform Policy",
            "subtopics": [
              {
                "name": "Staff Uniform Policy",
                "sopNum": 47
              }
            ]
          },
          {
            "name": "Staffing",
            "subtopics": [
              {
                "name": "Architecture of Hiring",
                "sopNum": 48
              },
              {
                "name": "Store Manpower Dimensioning (RAG)",
                "sopNum": 49
              },
              {
                "name": "Hiring Process - Sourcing, Screening, Recruitment",
                "sopNum": 50
              },
              {
                "name": "Interview Guide",
                "sopNum": 51
              },
              {
                "name": "Assesment Sheet & Questionaire Format for Associate",
                "sopNum": 52
              },
              {
                "name": "Reference Guide for Scoring",
                "sopNum": 53
              },
              {
                "name": "Aptitude Test Paper for CSA - Refer Annexure 3",
                "sopNum": 54
              }
            ]
          },
          {
            "name": "Onboarding Process",
            "subtopics": [
              {
                "name": "Hiring Process Through R-Boarding Mobile App/ RIL Website/ R-Connect",
                "sopNum": 55
              }
            ]
          },
          {
            "name": "TA Contract Process",
            "subtopics": [
              {
                "name": "Trainee Apprentice Associate Contract Registration and Contract Generation - Refer Annexure 7",
                "sopNum": 56
              }
            ]
          },
          {
            "name": "Confirmation Process",
            "subtopics": [
              {
                "name": "Associate Confirmation Process in R-Connect",
                "sopNum": 57
              }
            ]
          },
          {
            "name": "Staff Attendance Process",
            "subtopics": [
              {
                "name": "MHere Pro for RR Attendance & Biometric Enrollment Process for Attendance - For New Employees Joinees",
                "sopNum": 58
              }
            ]
          }
        ]
      },
      {
        "name": "Learning & Development",
        "topics": [
          {
            "name": "L&D Enablers",
            "subtopics": [
              {
                "name": "Reliance Retail University",
                "sopNum": 59
              },
              {
                "name": "Virtual Instructor Led Training (VILT)",
                "sopNum": 60
              },
              {
                "name": "The Learning Passbook (LPB) for Associates",
                "sopNum": 61
              }
            ]
          },
          {
            "name": "L&D Programs Associate",
            "subtopics": [
              {
                "name": "Associate Induction & Store Team Readiness",
                "sopNum": 62
              },
              {
                "name": "BOH and C&A Role Readiness",
                "sopNum": 63
              },
              {
                "name": "Store Buddy Program",
                "sopNum": 64
              },
              {
                "name": "In-Store Learning (ISL)",
                "sopNum": 65
              },
              {
                "name": "Certificate Program in Fashion Retail (CPFR)",
                "sopNum": 66
              }
            ]
          },
          {
            "name": "L&D Programs Managers",
            "subtopics": [
              {
                "name": "SM Induction & Role Readiness",
                "sopNum": 67
              },
              {
                "name": "DM Induction & Role Readiness",
                "sopNum": 68
              },
              {
                "name": "Store Leadership Development Program (SLDP)",
                "sopNum": 69
              }
            ]
          }
        ]
      },
      {
        "name": "Store Engagement Policy",
        "topics": [
          {
            "name": "People Engagement",
            "subtopics": [
              {
                "name": "Stores Celebration Celebration and Reward Policy",
                "sopNum": 70
              }
            ]
          }
        ]
      },
      {
        "name": "Career Progression",
        "topics": [
          {
            "name": "Compensation Components",
            "subtopics": [
              {
                "name": "Salary and Incentive Benefit",
                "sopNum": 71
              }
            ]
          },
          {
            "name": "Employee Benefits",
            "subtopics": [
              {
                "name": "Reliance One Family Special Benefit",
                "sopNum": 72
              },
              {
                "name": "Marriage Gift",
                "sopNum": 73
              },
              {
                "name": "Employee Provident Fund & Employee Pension Scheme Benefit",
                "sopNum": 74
              },
              {
                "name": "Gratuity Benefit",
                "sopNum": 75
              },
              {
                "name": "Maternity Benefits",
                "sopNum": 76
              },
              {
                "name": "ESIC – Employee's Stateal Insurance Corporation",
                "sopNum": 77
              },
              {
                "name": "DHS – Dedicated Health Insurance",
                "sopNum": 78
              },
              {
                "name": "Transfer Policy",
                "sopNum": 79
              },
              {
                "name": "Travel Policy",
                "sopNum": 80
              },
              {
                "name": "Retention Policy",
                "sopNum": 81
              }
            ]
          },
          {
            "name": "Separation Policy",
            "subtopics": [
              {
                "name": "Resignation",
                "sopNum": 82
              },
              {
                "name": "Absconding",
                "sopNum": 83
              },
              {
                "name": "Termination- (TBD)",
                "sopNum": 84
              }
            ]
          }
        ]
      },
      {
        "name": "Health and Safety",
        "topics": [
          {
            "name": "Health and Safety",
            "subtopics": [
              {
                "name": "Handling Death Cases",
                "sopNum": 85
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mod-admin",
    "pillar": "04",
    "name": "MOD Admin",
    "description": "Store locking/unlocking procedures, asset allocation tracking, utility billing structure",
    "sopCount": 47,
    "processes": [
      {
        "name": "Store Locking and Unlocking process",
        "topics": [
          {
            "name": "Store Opening process",
            "subtopics": [
              {
                "name": "Store Unlocking at Day Begin",
                "sopNum": 142
              },
              {
                "name": "Store Opening Process for Customer Trading",
                "sopNum": 143
              }
            ]
          },
          {
            "name": "Store Closing Process",
            "subtopics": [
              {
                "name": "Store Closing Process for Customers",
                "sopNum": 144
              }
            ]
          }
        ]
      },
      {
        "name": "Store Keys Management",
        "topics": [
          {
            "name": "Store and Safe Key Management Process",
            "subtopics": [
              {
                "name": "Store and Safe Key Management Process",
                "sopNum": 145
              }
            ]
          }
        ]
      },
      {
        "name": "Store Operational Acitivities",
        "topics": [
          {
            "name": "Big Days Management Process",
            "subtopics": [
              {
                "name": "Big Day Management and Checklist",
                "sopNum": 146
              }
            ]
          },
          {
            "name": "Operational Parameters and Shift Planning Process",
            "subtopics": [
              {
                "name": "Lean and Peak Time Management,Shift Planning and KPI'S Process",
                "sopNum": 147
              }
            ]
          },
          {
            "name": "In Store Equipments Process",
            "subtopics": [
              {
                "name": "In Store Equipments",
                "sopNum": 181
              }
            ]
          },
          {
            "name": "RGP and NRGP Gate Process",
            "subtopics": [
              {
                "name": "RGP & NRGP - GATE Passes",
                "sopNum": 182
              }
            ]
          },
          {
            "name": "Document Retention Policy",
            "subtopics": [
              {
                "name": "Document Retention Policy",
                "sopNum": 183
              }
            ]
          },
          {
            "name": "Customer Data Maintenace Process",
            "subtopics": [
              {
                "name": "Prevention of Misuse of Customer Data -",
                "sopNum": 185
              }
            ]
          },
          {
            "name": "Business Operations Centre (BOC) Process",
            "subtopics": [
              {
                "name": "Business Operations Centre (BOC)",
                "sopNum": 186
              }
            ]
          },
          {
            "name": "Promo Offer Execution at Stores",
            "subtopics": [
              {
                "name": "Offer execution at store",
                "sopNum": 187
              }
            ]
          },
          {
            "name": "Employee Purchase Process",
            "subtopics": [
              {
                "name": "Employee Purchase Process",
                "sopNum": 188
              }
            ]
          }
        ]
      },
      {
        "name": "Night Shift Management",
        "topics": [
          {
            "name": "Night Shift Management",
            "subtopics": [
              {
                "name": "Night Shift Management",
                "sopNum": 148
              }
            ]
          }
        ]
      },
      {
        "name": "Space on Hire",
        "topics": [
          {
            "name": "Space on Hire",
            "subtopics": [
              {
                "name": "Space on Hire",
                "sopNum": 149
              }
            ]
          }
        ]
      },
      {
        "name": "Handling Emergency and Critical Situation",
        "topics": [
          {
            "name": "Handling Emergency and Critical Situation",
            "subtopics": [
              {
                "name": "Handling Press & Media,ShoplIfters Guidelines,Fire",
                "sopNum": 150
              },
              {
                "name": "Emergency Situation- ROITS/BANDH,Natural Calamities,Visit By Inspectors,Disaster Management",
                "sopNum": 151
              }
            ]
          }
        ]
      },
      {
        "name": "Retail Service Desk Portal Usage",
        "topics": [
          {
            "name": "Service Desk Portal",
            "subtopics": [
              {
                "name": "Service Desk Portal Usage",
                "sopNum": 152
              },
              {
                "name": "Important point to note for effective call log:",
                "sopNum": 153
              }
            ]
          },
          {
            "name": "Raisng a Call Log Process",
            "subtopics": [
              {
                "name": "Call Log Process for Pricing & Promotions Issues at Store",
                "sopNum": 154
              },
              {
                "name": "Raising a Call Log for  IT – Problem",
                "sopNum": 155
              },
              {
                "name": "Raising a Call Log for D& L Related Problem (Grdc Issues)",
                "sopNum": 156
              },
              {
                "name": "Raising a Call Log for D& L Related Problem (Receiving Issues)",
                "sopNum": 157
              },
              {
                "name": "Raising a Call Log for Commercial Related Problem",
                "sopNum": 158
              },
              {
                "name": "Raising a Call Log for D & L - Transportation Related Problem",
                "sopNum": 159
              },
              {
                "name": "Raising a Call Log for HR Related Problem",
                "sopNum": 160
              },
              {
                "name": "Raising a Call Log for Marketing Related Problem",
                "sopNum": 161
              },
              {
                "name": "Raising a Call Log for Merchandise Fill Issue Related Problem",
                "sopNum": 162
              },
              {
                "name": "Raising a Call Log for Omni Channe Related Problem",
                "sopNum": 163
              },
              {
                "name": "Raising a Call Log for Quality Issues Related Problem",
                "sopNum": 164
              },
              {
                "name": "Raising a Call Log for Retail Planning Related Problem",
                "sopNum": 165
              },
              {
                "name": "Raising a Call Log for Support Office Related Problem",
                "sopNum": 166
              },
              {
                "name": "Raising a Call Log for VM Related Problem",
                "sopNum": 167
              }
            ]
          }
        ]
      },
      {
        "name": "Gift Issuance Process",
        "topics": [
          {
            "name": "Process of Handling Gifts at Stores",
            "subtopics": [
              {
                "name": "Process of Handling Gifts at Stores - Gift Issuance Process From CSD / Cash Counter",
                "sopNum": 168
              },
              {
                "name": "IOU Management and Gifts Inventory Managmenet",
                "sopNum": 169
              },
              {
                "name": "Ground Rules for Operational Store and NSO Stores,Promo Closure Process .Escalation Process",
                "sopNum": 170
              }
            ]
          }
        ]
      },
      {
        "name": "Consumables Management Process",
        "topics": [
          {
            "name": "Consumables Purchase Order (PO) Creation and Release  Process Process",
            "subtopics": [
              {
                "name": "Consumables PO  Creation and Release Process in SAP",
                "sopNum": 171
              }
            ]
          },
          {
            "name": "Hanger Management",
            "subtopics": [
              {
                "name": "Hanger Management",
                "sopNum": 172
              }
            ]
          },
          {
            "name": "Carry Bag Management",
            "subtopics": [
              {
                "name": "Carry bag Management:",
                "sopNum": 173
              }
            ]
          },
          {
            "name": "Tags & Pin Management",
            "subtopics": [
              {
                "name": "Tags,Pin Management",
                "sopNum": 174
              }
            ]
          },
          {
            "name": "Rubber Stamps and Register Management",
            "subtopics": [
              {
                "name": "Rubber Stamp & Registers maintained in store",
                "sopNum": 175
              }
            ]
          }
        ]
      },
      {
        "name": "Store Important Portals",
        "topics": [
          {
            "name": "Access To Important Portals and Password Reset Process",
            "subtopics": [
              {
                "name": "Zmail Password Reset",
                "sopNum": 176
              },
              {
                "name": "S.A.P Portal and REIMS Portal Password Reset",
                "sopNum": 177
              },
              {
                "name": "Retail Analytics,Footfall ,ENMS ,RPE and R-Connect Portal Password Access/Reset",
                "sopNum": 178
              },
              {
                "name": "Service Desk Password Reset:",
                "sopNum": 179
              }
            ]
          }
        ]
      },
      {
        "name": "New Store Opening Process",
        "topics": [
          {
            "name": "New Store Opening Process",
            "subtopics": [
              {
                "name": "New Store Opening (NSO)",
                "sopNum": 180
              }
            ]
          }
        ]
      },
      {
        "name": "Store De-Hiring Process",
        "topics": [
          {
            "name": "Store De-Hiring Process",
            "subtopics": [
              {
                "name": "Store De-Hiring Process",
                "sopNum": 184
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "service-charter",
    "pillar": "05",
    "name": "Service Charter",
    "description": "Customer service touchpoints, parking facilities SLA metrics, and retail desk portals",
    "sopCount": 36,
    "processes": [
      {
        "name": "Customer Touch Points",
        "topics": [
          {
            "name": "Parking Facilities",
            "subtopics": [
              {
                "name": "Parking Services",
                "sopNum": 189
              },
              {
                "name": "Service Level Agreement",
                "sopNum": 190
              },
              {
                "name": "Standard Operating Procedures",
                "sopNum": 191
              },
              {
                "name": "Mall Stores",
                "sopNum": 192
              },
              {
                "name": "Standalone Stores",
                "sopNum": 193
              }
            ]
          },
          {
            "name": "Greeter Roles",
            "subtopics": [
              {
                "name": "Front Door Greeter",
                "sopNum": 194
              },
              {
                "name": "Standard Operating Procedures",
                "sopNum": 195
              }
            ]
          },
          {
            "name": "Baggage Counter",
            "subtopics": [
              {
                "name": "Baggage Counter",
                "sopNum": 196
              },
              {
                "name": "Service Level Agreement",
                "sopNum": 197
              },
              {
                "name": "Standard Operating Procedures",
                "sopNum": 198
              }
            ]
          },
          {
            "name": "Trial Room",
            "subtopics": [
              {
                "name": "Trial Rooms",
                "sopNum": 204
              },
              {
                "name": "Service Level Agreement",
                "sopNum": 205
              },
              {
                "name": "Standard Operating Procedure:",
                "sopNum": 206
              }
            ]
          },
          {
            "name": "Billing Service",
            "subtopics": [
              {
                "name": "Billing Service",
                "sopNum": 224
              }
            ]
          }
        ]
      },
      {
        "name": "Customer Service Process",
        "topics": [
          {
            "name": "CSA Role",
            "subtopics": [
              {
                "name": "Role of CSA/ Manager",
                "sopNum": 199
              },
              {
                "name": "Role of CSA",
                "sopNum": 200
              },
              {
                "name": "Service Level Agreement",
                "sopNum": 201
              }
            ]
          },
          {
            "name": "Manager Role",
            "subtopics": [
              {
                "name": "Role of Manager",
                "sopNum": 202
              },
              {
                "name": "Handling Grievances",
                "sopNum": 203
              }
            ]
          },
          {
            "name": "Sensory Services",
            "subtopics": [
              {
                "name": "Sensory: Light, Temperature, Music & Announcements, Olfactory",
                "sopNum": 207
              },
              {
                "name": "Service Level Agreement",
                "sopNum": 208
              },
              {
                "name": "Standard Operating Procedures",
                "sopNum": 209
              },
              {
                "name": "Temperature",
                "sopNum": 210
              },
              {
                "name": "Light (LUX)",
                "sopNum": 211
              },
              {
                "name": "Music and Announcements",
                "sopNum": 212
              }
            ]
          },
          {
            "name": "Other Services",
            "subtopics": [
              {
                "name": "Service Level Agreement",
                "sopNum": 213
              },
              {
                "name": "Alteration",
                "sopNum": 214
              },
              {
                "name": "Lost and Found",
                "sopNum": 215
              },
              {
                "name": "Exchange",
                "sopNum": 216
              },
              {
                "name": "Drinking Water",
                "sopNum": 217
              },
              {
                "name": "Washroom",
                "sopNum": 218
              },
              {
                "name": "Customer Seating",
                "sopNum": 219
              },
              {
                "name": "Wheel Chair",
                "sopNum": 220
              },
              {
                "name": "Tag Beep and Shoplifting",
                "sopNum": 221
              },
              {
                "name": "Security Guard",
                "sopNum": 222
              },
              {
                "name": "Mandatory Signages",
                "sopNum": 223
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "vm",
    "pillar": "06",
    "name": "VM",
    "description": "Visual Merchandising guidelines, signages positioning, Fitch context store layouts",
    "sopCount": 31,
    "processes": [
      {
        "name": "Trends Overview",
        "topics": [
          {
            "name": "Trends Overview",
            "subtopics": [
              {
                "name": "Trends Defination",
                "sopNum": 232
              },
              {
                "name": "Trends Journey",
                "sopNum": 233
              },
              {
                "name": "Trends Format",
                "sopNum": 234
              },
              {
                "name": "Brand Positioning",
                "sopNum": 235
              },
              {
                "name": "Trends Categories",
                "sopNum": 236
              },
              {
                "name": "Trends Own brand Portfolio",
                "sopNum": 237
              }
            ]
          }
        ]
      },
      {
        "name": "VM AT TRENDS",
        "topics": [
          {
            "name": "VM Process",
            "subtopics": [
              {
                "name": "What is VM",
                "sopNum": 238
              },
              {
                "name": "VM Role",
                "sopNum": 239
              },
              {
                "name": "VM Objective",
                "sopNum": 240
              },
              {
                "name": "How to Achieve our Goal",
                "sopNum": 241
              },
              {
                "name": "Team Structure",
                "sopNum": 242
              },
              {
                "name": "VM Concept",
                "sopNum": 243
              },
              {
                "name": "VM Mockshop",
                "sopNum": 244
              },
              {
                "name": "Merchandise Plan",
                "sopNum": 245
              },
              {
                "name": "VM Operation Work Process",
                "sopNum": 246
              },
              {
                "name": "VM Commercial Process",
                "sopNum": 247
              },
              {
                "name": "VM Checklist",
                "sopNum": 248
              }
            ]
          },
          {
            "name": "Store Front/Fascade",
            "subtopics": [
              {
                "name": "Store Front/Fascade",
                "sopNum": 257
              }
            ]
          },
          {
            "name": "Window",
            "subtopics": [
              {
                "name": "Window Mannequin Grouping",
                "sopNum": 258
              }
            ]
          },
          {
            "name": "Mannequin",
            "subtopics": [
              {
                "name": "Mannequin Pose",
                "sopNum": 259
              },
              {
                "name": "Mannequin Grouping",
                "sopNum": 260
              }
            ]
          }
        ]
      },
      {
        "name": "New Format Store-Fitch Concept",
        "topics": [
          {
            "name": "Fitch Concept",
            "subtopics": [
              {
                "name": "Fitch Concept-Guidelines",
                "sopNum": 249
              },
              {
                "name": "Fitch Concept-Layout Reading",
                "sopNum": 250
              },
              {
                "name": "Fitch Concept-Zoning",
                "sopNum": 251
              },
              {
                "name": "Fitch Concept-Fixture",
                "sopNum": 252
              },
              {
                "name": "Fitch Concept-Cash Till",
                "sopNum": 253
              },
              {
                "name": "Fitch Concept- Trail Room",
                "sopNum": 254
              },
              {
                "name": "Fitch Concept-Customer service Area",
                "sopNum": 255
              },
              {
                "name": "Fitch Concept-Bag Drop",
                "sopNum": 256
              }
            ]
          }
        ]
      },
      {
        "name": "VM Signages",
        "topics": [
          {
            "name": "Signage Communication",
            "subtopics": [
              {
                "name": "VM Signage Communication",
                "sopNum": 261
              },
              {
                "name": "Mandatory/Legal Signages",
                "sopNum": 262
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mod-maintenance",
    "pillar": "07",
    "name": "MOD Maintenance",
    "description": "Facility management authorization matrices, routine structural maintenance",
    "sopCount": 7,
    "processes": [
      {
        "name": "Store Maintenance Activities",
        "topics": [
          {
            "name": "Facility Management Process",
            "subtopics": [
              {
                "name": "Facility Management Authorization Matrix",
                "sopNum": 225
              },
              {
                "name": "Facility Management Authorization Matrix",
                "sopNum": 226
              }
            ]
          },
          {
            "name": "Store Lights Management Process",
            "subtopics": [
              {
                "name": "Store Lights Management & Refresh",
                "sopNum": 227
              }
            ]
          },
          {
            "name": "Housekeeping Process",
            "subtopics": [
              {
                "name": "Housekeeping Process",
                "sopNum": 228
              }
            ]
          },
          {
            "name": "Diesel Management Process",
            "subtopics": [
              {
                "name": "Diesel Management",
                "sopNum": 229
              }
            ]
          },
          {
            "name": "Energy Consumption Booking Process",
            "subtopics": [
              {
                "name": "Energy Consumption Booking and EMS Portal-Meter Redaing User Manual",
                "sopNum": 230
              }
            ]
          },
          {
            "name": "Ril Operation Energy Checklist",
            "subtopics": [
              {
                "name": "RIL Operation Energy Checklist",
                "sopNum": 231
              }
            ]
          }
        ]
      }
    ]
  }
];