
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Mastering Clay Preparation: Essential Techniques for Beginners",
    excerpt: "Learn the fundamental techniques for preparing clay that will set the foundation for all your future projects.",
    content: `Clay preparation is the cornerstone of successful ceramic work. In this comprehensive guide, we'll explore the essential techniques every beginner needs to master to create beautiful, lasting ceramic pieces.

**Understanding Clay: The Foundation of Your Art**

Before diving into preparation techniques, it's crucial to understand what clay is and why proper preparation matters. Clay is a natural material formed over thousands of years through the weathering of feldspar-rich rocks. This geological process creates the plasticity and workability that makes clay perfect for artistic expression.

**Getting Started with Clay Selection**

The first step in clay preparation is choosing the right type of clay for your project. At Garside Enterprise, we offer several varieties, each with unique characteristics:

**Earthenware Clay**: Perfect for beginners, this clay fires at low temperatures (1000°C-1100°C). It's forgiving, easy to work with, and ideal for decorative pieces, garden pottery, and learning basic techniques.

**Stoneware Clay**: Durable and versatile, ideal for functional pottery (1200°C-1300°C). This clay becomes vitrified at high temperatures, making it perfect for dinnerware, vases, and outdoor sculptures.

**Porcelain Clay**: Fine and delicate, best for decorative pieces (1250°C-1400°C). Known for its pure white color and translucent quality when fired thin, porcelain requires more skill but produces stunning results.

**Essential Preparation Steps**

**1. Wedging: The Heart of Clay Preparation**

Wedging is the most crucial step in clay preparation. This process removes air bubbles and creates uniform consistency throughout your clay body. Think of it as kneading bread dough, but with specific techniques:

- **Spiral Wedging**: Place clay on a wedging board and push down with the heel of your hand while rotating the clay. This creates a spiral pattern and effectively mixes the clay.
- **Rams Head Wedging**: Cut the clay in half, slam one piece onto the other, and repeat. This method is excellent for removing air bubbles.
- **Wire Wedging**: Use a wire tool to cut through the clay, checking for air bubbles and inconsistencies.

Spend 10-15 minutes wedging your clay. Properly wedged clay should feel smooth and consistent, without any hard or soft spots.

**2. Moisture Control: Finding the Perfect Balance**

Clay moisture content dramatically affects workability. Your clay should feel like soft butter – pliable but not sticky.

**Too Dry?** Add water gradually using a spray bottle or damp sponge. Work the water in slowly to avoid creating pockets of overly wet clay.

**Too Wet?** Place clay on a plaster bat or canvas-covered board. These materials will absorb excess moisture. You can also add dry clay dust (grog) to absorb moisture and add texture.

**3. Testing Plasticity: The Coil Test**

Before starting any project, test your clay's plasticity:
- Roll a small piece into a coil about the thickness of a pencil
- Slowly bend the coil into a circle
- Good clay won't crack or break easily
- If cracks appear immediately, your clay needs more moisture or aging

**4. Checking for Impurities**

Examine your clay for foreign materials like stones, twigs, or metal particles. These can cause cracks during firing or damage your tools. Remove any impurities by hand or by passing the clay through a screen.

**Storage and Aging: Improving Clay Quality Over Time**

**Proper Storage Techniques:**
- Wrap prepared clay tightly in plastic bags to prevent moisture loss
- Store in a cool, humid environment (basement or clay storage room)
- Keep different clay types separated to avoid contamination
- Label storage containers with clay type and preparation date

**The Magic of Aging:**
Aging clay for several weeks or even months dramatically improves its plasticity and workability. During aging, beneficial bacteria break down organic materials in the clay, creating a more cohesive, workable body. Many professional potters age their clay for months or even years.

**Advanced Preparation Techniques**

**Creating Custom Clay Bodies:**
As you advance, you might want to blend different clays or add materials:
- **Grog**: Fired clay particles that reduce shrinkage and add strength
- **Sand**: Improves workability for hand-building
- **Paper Pulp**: Creates lightweight, strong bodies for large sculptures
- **Chamotte**: Pre-fired clay that reduces thermal shock

**Reclaiming Clay:**
Never waste clay! Dry scraps can be reclaimed:
1. Dry clay scraps completely
2. Break into small pieces
3. Cover with water and let slake for 24-48 hours
4. Pour off excess water
5. Spread on plaster bats to remove moisture
6. Wedge thoroughly before use

**Common Mistakes to Avoid**

- **Rushing the wedging process**: Take time to properly prepare your clay
- **Adding too much water at once**: This creates uneven moisture distribution
- **Not testing clay readiness**: Always perform the coil test
- **Working with contaminated clay**: Keep your workspace clean
- **Ignoring storage conditions**: Improper storage leads to clay degradation

**Tools for Clay Preparation**

Essential tools for clay preparation include:
- Wire clay cutters for sectioning
- Wedging boards (canvas-covered or plaster)
- Spray bottles for moisture control
- Canvas or burlap for covering work
- Plastic bags and containers for storage

**Environmental Considerations**

When preparing clay, consider:
- Working in a well-ventilated area to avoid inhaling clay dust
- Keeping clay damp to minimize airborne particles
- Using local clays when possible to reduce environmental impact
- Properly disposing of clay water (never down drains)

With these fundamentals mastered, you'll be ready to create beautiful, lasting ceramic pieces. Remember, practice makes perfect, and every potter develops their own preferences for clay preparation. The key is consistency and attention to detail in every step of the process.`,
    image: "art.jpg",
    category: "Tutorial",
    date: "December 15, 2024",
    readTime: "12 min read"
  },
  {
    id: 2,
    title: "The Art of Glazing: Creating Stunning Finishes",
    excerpt: "Discover the secrets behind beautiful ceramic glazes and how to achieve professional-quality finishes.",
    content: `Glazing is where the magic truly happens in ceramic work. The right glaze can transform a simple bisque-fired piece into a stunning work of art that captures light, color, and texture in ways that never cease to amaze.

**Understanding Glaze Fundamentals**

Glazes are essentially glass coatings that melt and fuse to your ceramic piece during firing. They serve multiple purposes:

**Protection**: Seals porous clay bodies, making them waterproof and food-safe
**Beauty**: Adds infinite possibilities for color, texture, and visual interest
**Functionality**: Creates smooth, hygienic surfaces perfect for functional pottery
**Artistic Expression**: Provides a canvas for creative effects and personal style

**The Science Behind Glazes**

Understanding glaze chemistry helps you achieve consistent results:

**Silica**: The glass former that creates the actual glaze coating
**Alumina**: Provides stability and prevents the glaze from running
**Flux**: Lowers the melting temperature, allowing glazes to mature properly
**Colorants**: Metal oxides that create the beautiful colors we see

**Types of Glazes Available at Garside Enterprise**

**1. Matte Glazes**
Matte glazes provide a soft, non-reflective finish that's perfect for contemporary and rustic pieces. They contain materials like calcium carbonate or barium carbonate that prevent complete melting, creating a satin-like surface.

*Best Applications*:
- Contemporary sculpture
- Rustic dinnerware
- Garden pottery
- Textural pieces where you want to emphasize form over surface

**2. Glossy Glazes**
These create brilliant, mirror-like surfaces that enhance colors beautifully and provide excellent protection. They contain higher amounts of flux, allowing complete melting and smooth flow.

*Best Applications*:
- Fine dinnerware
- Decorative vessels
- Jewelry and small objects
- Pieces where vibrant color is desired

**3. Crystalline Glazes**
Perhaps the most spectacular glazes, crystalline glazes form unique crystal patterns during the cooling process. They require precise firing schedules and special kiln furniture.

*Characteristics*:
- Form zinc and titanium crystals
- Require slow cooling cycles
- Create one-of-a-kind patterns
- Best on simple, smooth forms

**4. Textured Glazes**
These glazes add dimensional interest through bubbling, crackling, or rough surfaces created by special additives or firing techniques.

*Types Include*:
- Crawl glazes that pull apart during firing
- Volcanic glazes that bubble and foam
- Crystalline textured glazes with surface crystals
- Dry glazes with rough, stone-like finishes

**5. Specialty Glazes**
- **Copper Red Glazes**: Require reduction firing for deep red colors
- **Celadon Glazes**: Iron-based glazes producing jade-like colors
- **Tenmoku Glazes**: Iron-rich glazes creating metallic effects
- **Salt Glazes**: Created during firing with salt vapor

**Glaze Application Techniques**

**1. Dipping**
The most common method for even coverage:
- Hold piece with tongs at the base
- Quickly immerse in glaze bucket
- Allow excess to drip back into bucket
- Perfect for achieving uniform thickness

**2. Brushing**
Ideal for detailed work and color variations:
- Use soft, natural bristle brushes
- Apply in smooth, even strokes
- Build up color with multiple thin coats
- Excellent for applying different glazes to different areas

**3. Spraying**
Achieves the smoothest, most professional finishes:
- Requires spray booth and proper ventilation
- Creates perfectly even coats
- Ideal for large pieces
- Allows for subtle color blending

**4. Pouring**
Great for large pieces and dramatic effects:
- Pour glaze over piece in steady stream
- Rotate piece for even coverage
- Collect runoff in pan below
- Creates unique drip patterns

**5. Trailing and Slip Trailing**
Decorative technique using squeeze bottles:
- Apply glazes in lines, dots, or patterns
- Combine multiple colors
- Create feathered or marbled effects
- Perfect for surface decoration

**Advanced Glazing Techniques**

**Layering Glazes**
Combining different glazes creates unique effects:
- Apply base glaze first, let dry completely
- Apply second glaze over or partially over first
- Colors interact during firing to create new hues
- Document successful combinations for future use

**Wax Resist Techniques**
Using wax to prevent glaze adhesion:
- Apply liquid wax to areas you want to remain unglazed
- Glaze over wax - it will resist and bead up
- Creates sharp lines and patterns
- Wax burns out during firing

**Masking and Stenciling**
Creating precise patterns:
- Use tape, paper, or vinyl stencils
- Apply base glaze, remove mask, apply second color
- Creates geometric patterns and sharp edges
- Plan removal sequence carefully

**Preparation: The Key to Success**

**Bisque Preparation**
Before glazing, your bisque-fired piece must be properly prepared:
- Clean thoroughly with damp sponge to remove dust
- Check for cracks or defects
- Ensure piece is completely dry
- Remove any kiln wash or debris

**Workspace Setup**
Organize your glazing area:
- Good lighting to see true colors
- Ventilation for safety
- Clean water for brush cleaning
- Towels for cleanup
- Proper storage for glazed pieces

**Glaze Mixing and Maintenance**
Keep glazes in perfect condition:
- Stir thoroughly before each use
- Screen glazes to remove lumps
- Maintain proper specific gravity
- Add water gradually if glaze thickens
- Keep detailed records of adjustments

**Firing Considerations**

**Kiln Loading**
Proper kiln loading ensures even results:
- Use stilts to prevent pieces from sticking to shelves
- Leave adequate space between pieces
- Avoid touching glazed surfaces to other pieces
- Place thermocouples properly for accurate readings

**Firing Schedules**
Different glazes require different firing approaches:
- Slow initial heating to prevent thermal shock
- Proper hold times at peak temperature
- Controlled cooling for crystal development
- Document successful firing schedules

**Common Glazing Problems and Solutions**

**Crawling**: Glaze pulling away from clay surface
*Causes*: Dust, oils, or thick application
*Solutions*: Clean bisque thoroughly, apply thinner coats

**Pinholing**: Small holes in fired glaze surface
*Causes*: Firing too quickly, overly thick application
*Solutions*: Slower firing, thinner application

**Color Variations**: Unexpected color changes
*Causes*: Uneven application, kiln atmosphere variations
*Solutions*: More careful application, kiln maintenance

**Running**: Glaze flowing down piece during firing
*Causes*: Over-application, too much flux in glaze
*Solutions*: Thinner application, adjust glaze recipe

**Professional Tips for Glazing Success**

1. **Keep Detailed Records**: Document every successful glaze combination and firing
2. **Test Everything**: Make test tiles before committing to large pieces
3. **Understand Your Kiln**: Every kiln fires differently
4. **Practice Consistency**: Develop reliable application techniques
5. **Embrace Happy Accidents**: Some of the best effects come from unexpected results
6. **Study Master Potters**: Learn from traditional and contemporary glazing approaches

**Safety Considerations**

Glazing safety is paramount:
- Work in well-ventilated areas
- Wear dust masks when mixing dry glazes
- Use proper eye protection
- Keep work area clean to prevent dust
- Never eat or drink in glazing areas
- Dispose of glaze materials properly

**Building Your Glaze Library**

Start with basic glazes and gradually expand:
- Begin with reliable commercial glazes
- Learn to mix your own recipes
- Keep comprehensive test tile records
- Experiment systematically
- Share knowledge with other ceramicists

Remember, glazing is both an art and a science. Success comes from understanding the fundamentals while remaining open to experimentation and continuous learning. Each piece teaches you something new about the magical transformation that occurs in the kiln.`,
    image: "/glazing.jpg",
    category: "Technique",
    date: "December 12, 2024",
    readTime: "15 min read"
  },
  {
    id: 3,
    title: "Tool Maintenance: Keeping Your Equipment in Perfect Condition",
    excerpt: "Learn proper care and maintenance techniques to extend the life of your sculpting tools and equipment.",
    content: `Proper tool maintenance is the hallmark of any serious ceramicist. Well-maintained tools not only last longer but also perform better, giving you consistently excellent results and allowing you to focus on your artistry rather than fighting with inadequate equipment.

**The Philosophy of Tool Care**

Your tools are extensions of your hands and creative vision. Treating them with respect and maintaining them properly is an investment in your craft that pays dividends in both quality and economy. A well-maintained tool can last decades, while a neglected one may fail when you need it most.

**Essential Categories of Ceramic Tools**

**1. Clay Working Tools**
These are your primary creative instruments:

**Wire Tools**: Used for cutting clay and trimming
- **Maintenance**: Check wire tension regularly, replace worn wires
- **Cleaning**: Wipe clean immediately after use, prevent clay buildup
- **Storage**: Hang or lay flat to prevent wire kinking

**Ribs and Scrapers**: For smoothing and shaping
- **Wood Ribs**: Sand lightly when rough, oil monthly with linseed oil
- **Metal Ribs**: Clean thoroughly, check for nicks and sharp edges
- **Rubber Ribs**: Wash with soap and water, replace when worn

**Modeling Tools**: For detailed work and surface texturing
- **Boxwood Tools**: Keep oiled to prevent cracking
- **Metal Tools**: Clean and dry thoroughly to prevent rust
- **Plastic Tools**: Replace when edges become rounded or damaged

**2. Throwing Tools**
Essential for wheel throwing:

**Sponges**: Critical for moisture control while throwing
- **Natural Sponges**: Rinse thoroughly after each use
- **Synthetic Sponges**: Replace frequently to prevent bacterial growth
- **Elephant Ear Sponges**: Rinse and squeeze gently to maintain texture

**Calipers**: For measuring wall thickness and dimensions
- **Cleaning**: Wipe clean and dry after each use
- **Lubrication**: Apply light oil to pivot points monthly
- **Storage**: Keep in protective case to prevent damage

**Turning Tools**: For trimming leather-hard pottery
- **Loop Tools**: Keep cutting edges sharp, file when necessary
- **Wooden Handles**: Sand smooth if rough, apply finish annually
- **Metal Loops**: Check for proper attachment to handles

**3. Kiln Equipment**
Your firing equipment requires special attention:

**Kiln Shelves**: The workhorses of ceramic firing
- **Daily Care**: Vacuum after each firing to remove debris
- **Deep Cleaning**: Scrape off glaze drips with putty knife
- **Kiln Wash**: Reapply protective coating as needed
- **Storage**: Stack properly with spacers to prevent warping

**Stilts and Posts**: Support your work during firing
- **Inspection**: Check for cracks or damage before each use
- **Cleaning**: Remove glaze deposits promptly
- **Replacement**: Discard damaged pieces immediately

**Thermocouples**: Temperature sensors for accurate firing
- **Protection**: Handle carefully to prevent damage
- **Cleaning**: Keep probe clean and properly positioned
- **Replacement**: Replace when readings become inconsistent

**4. Glazing Equipment**
Tools for applying beautiful finishes:

**Brushes**: Various types for different applications
- **Natural Bristle**: Clean immediately after use, reshape while damp
- **Synthetic Brushes**: More durable but still require proper care
- **Storage**: Hang or lay flat, never store bristles-down

**Spray Equipment**: For professional-quality finishes
- **Guns**: Disassemble and clean thoroughly after each use
- **Compressors**: Drain moisture regularly, change filters
- **Booth Maintenance**: Keep filters clean, maintain proper airflow

**Daily Maintenance Routine**

**Immediate Post-Use Care**
The most important maintenance happens right after you use your tools:

1. **Clean Immediately**: Never let clay dry on your tools - it becomes exponentially harder to remove
2. **Rinse Thoroughly**: Use clean water to remove all clay residue
3. **Dry Completely**: Moisture is the enemy of metal tools and wooden handles
4. **Quick Inspection**: Look for damage, wear, or needed repairs

**End-of-Session Checklist**
Before leaving your studio:
- All tools cleaned and dried
- Metal tools checked for rust spots
- Wooden handles inspected for cracks
- Tools properly stored
- Work area cleaned

**Weekly Deep Maintenance**

**Metal Tool Care**
- **Light Rust**: Remove with fine steel wool (0000 grade)
- **Stubborn Deposits**: Use CLR (Calcium, Lime & Rust remover)
- **Protection**: Apply light coat of camellia oil or WD-40
- **Sharpening**: Use appropriate files or stones for cutting tools

**Wooden Handle Maintenance**
- **Cleaning**: Wipe with damp cloth, dry immediately
- **Sanding**: Light sanding with 220-grit paper if rough
- **Conditioning**: Apply linseed oil or Danish oil monthly
- **Crack Prevention**: Store in stable humidity environment

**Electrical Equipment**
- **Wheels**: Clean splash pans, check drive belts
- **Kilns**: Vacuum interior, inspect heating elements
- **Pugmills**: Clean thoroughly, lubricate moving parts
- **Ventilation**: Clean filters, check fan operation

**Monthly Comprehensive Maintenance**

**Tool Inventory and Assessment**
- Complete inspection of all tools
- List items needing repair or replacement
- Order replacement parts and new tools as needed
- Update tool inventory records

**Deep Cleaning Session**
- Disassemble tools where possible
- Thorough cleaning of all components
- Apply protective coatings
- Reorganize storage areas

**Calibration and Testing**
- Check kiln temperature accuracy
- Test pyrometric cones for freshness
- Calibrate scales and measuring devices
- Verify ventilation system operation

**Storage Best Practices**

**Environmental Control**
- Maintain consistent temperature and humidity
- Provide adequate ventilation
- Protect from direct sunlight
- Keep storage areas clean and organized

**Organization Systems**
- Group similar tools together
- Use foam-lined drawers for delicate items
- Label everything clearly
- Create shadow boards for frequently used tools

**Protection Methods**
- Use tool rolls for portability
- Individual slots prevent tool damage
- Magnetic strips for metal tools
- Drawer organizers for small items

**Seasonal Maintenance Schedule**

**Spring Preparation**
- Deep clean all equipment after winter
- Replace worn items before busy season
- Service major equipment (kilns, wheels)
- Update safety equipment

**Summer Vigilance**
- Monitor humidity effects on tools
- Increase cleaning frequency
- Check ventilation systems
- Protect tools from heat damage

**Fall Preparation**
- Prepare tools for indoor season
- Stock up on replacement items
- Service heating systems
- Organize winter workspace

**Winter Protection**
- Protect from temperature extremes
- Monitor for condensation issues
- Maintain consistent care routine
- Plan equipment upgrades

**When to Repair vs. Replace**

**Repairable Issues**
- Wooden handle cracks (if not structural)
- Wire tool tension problems
- Minor rust on metal tools
- Dull cutting edges
- Loose connections

**Replacement Indicators**
- Structural damage to handles
- Severely worn cutting surfaces
- Broken thermocouples
- Cracked kiln shelves
- Damaged electrical components

**Cost-Benefit Analysis**
Consider:
- Repair cost vs. replacement cost
- Tool's age and overall condition
- Availability of replacement parts
- Time investment required
- Safety implications

**Professional Maintenance Services**

**When to Seek Professional Help**
- Kiln element replacement
- Wheel motor service
- Complex electrical repairs
- Thermocouple calibration
- Major equipment overhauls

**Finding Qualified Technicians**
- Manufacturer recommendations
- Local ceramic suppliers
- Professional ceramicist referrals
- Technical schools with ceramic programs

**Building Maintenance Skills**

**Learning Resources**
- Manufacturer manuals and documentation
- Online video tutorials
- Ceramic magazines and publications
- Workshops and classes
- Experienced ceramicist mentorship

**Essential Skills to Develop**
- Basic electrical safety and troubleshooting
- Simple mechanical repairs
- Proper tool sharpening techniques
- Equipment calibration procedures
- Safety protocol implementation

**Creating a Maintenance Budget**

**Annual Planning**
- Estimate replacement costs
- Budget for professional services
- Plan for equipment upgrades
- Set aside emergency repair funds

**Cost-Saving Strategies**
- Buy quality tools initially
- Maintain equipment properly
- Learn basic repair skills
- Buy replacement parts in bulk
- Form buying groups with other ceramicists

**Record Keeping for Maintenance**

**Documentation Benefits**
- Track tool lifespan and performance
- Identify patterns in wear and failure
- Plan replacement schedules
- Maintain warranty information
- Support insurance claims

**What to Record**
- Purchase dates and costs
- Maintenance performed and when
- Repair history and costs
- Performance issues noted
- Replacement schedules

Remember, proper tool maintenance is not just about preserving your investment - it's about ensuring that your creative vision isn't compromised by inadequate or failing equipment. Well-maintained tools become trusted partners in your artistic journey, allowing you to focus on creating rather than troubleshooting.`,
    image: "/maintain.jpg",
    category: "Maintenance",
    date: "December 10, 2024",
    readTime: "18 min read"
  },
  {
    id: 4,
    title: "Understanding Different Clay Types and Their Applications",
    excerpt: "A comprehensive guide to choosing the right clay for your specific artistic vision and project requirements.",
    content: `Not all clays are created equal. Understanding the different types of clay and their unique properties is essential for any ceramic artist working toward mastery. The right clay choice can make the difference between a successful project and a frustrating failure.

**The Geological Foundation of Clay**

Clay is formed through the weathering of feldspar-rich rocks over thousands of years. Different geological conditions create clays with vastly different characteristics, each suited for specific applications. Understanding this origin helps explain why clays behave so differently from one another.

**Primary vs. Secondary Clays**

**Primary Clays** (Residual Clays):
- Formed in place where parent rock weathered
- Generally less plastic but more pure
- Examples: Kaolin, some fire clays
- Characteristics: Clean burning, high firing temperatures

**Secondary Clays** (Sedimentary Clays):
- Transported by water, wind, or ice from original location
- More plastic due to particle size and contamination
- Examples: Ball clays, most earthenware clays
- Characteristics: Higher plasticity, often contain organic matter

**Detailed Clay Body Analysis**

**1. Earthenware Clay: The Beginner's Friend**

**Technical Specifications**:
- **Firing Temperature**: 950°C - 1100°C (1742°F - 2012°F)
- **Maturation Cone**: 04-6
- **Shrinkage Rate**: 6-8% total shrinkage
- **Absorption Rate**: 10-15% after firing
- **Iron Content**: Usually high (2-8%), giving warm colors

**Physical Characteristics**:
- High plasticity makes it forgiving for beginners
- Lower firing temperature saves energy costs
- Remains porous after firing, requiring glazing for waterproofing
- Natural colors range from buff to deep red-brown
- Easy to reclaim and reuse

**Best Applications**:
- **Garden Pottery**: Terra cotta pots, planters, garden sculptures
- **Decorative Tiles**: Wall tiles, artistic installations
- **Beginner Projects**: Learning basic techniques without high-fire complexity
- **Large Sculptures**: Lower firing stress allows for bigger pieces
- **Historical Reproductions**: Many traditional pottery styles used earthenware

**Working Properties**:
- Excellent throwing properties for wheel work
- Good for hand-building techniques
- Accepts slip trailing and sgraffito decoration well
- Forgiving during drying - less prone to cracking

**2. Stoneware Clay: The Workhorse**

**Technical Specifications**:
- **Firing Temperature**: 1200°C - 1300°C (2192°F - 2372°F)
- **Maturation Cone**: 6-12
- **Shrinkage Rate**: 5-7% total shrinkage
- **Absorption Rate**: 1-5% after firing (nearly vitrified)
- **Iron Content**: Variable, affecting final color

**Physical Characteristics**:
- Becomes vitrified at maturity, creating strong, durable pieces
- Excellent thermal shock resistance
- Natural colors from light gray to dark brown
- Good workability for most techniques
- Excellent for functional pottery

**Best Applications**:
- **Dinnerware**: Plates, bowls, mugs for daily use
- **Bakeware**: Casserole dishes, baking stones
- **Storage Vessels**: Crocks, jars, fermentation vessels
- **Outdoor Sculptures**: Weather-resistant installations
- **Architectural Elements**: Roof tiles, decorative panels

**Working Properties**:
- Moderate plasticity - good for throwing and hand-building
- Accepts most glazes well
- Can be fired in oxidation or reduction atmospheres
- Excellent for salt and soda firing techniques

**3. Porcelain Clay: The Aristocrat**

**Technical Specifications**:
- **Firing Temperature**: 1250°C - 1400°C (2282°F - 2552°F)
- **Maturation Cone**: 8-14
- **Shrinkage Rate**: 7-10% total shrinkage
- **Absorption Rate**: 0-3% after firing (fully vitrified)
- **Iron Content**: Very low (<1%), ensuring pure white color

**Physical Characteristics**:
- Finest particle size of all clay types
- Translucent when fired thin
- Pure white color when fired
- Most challenging to work with
- Highest shrinkage rate

**Best Applications**:
- **Fine Dinnerware**: High-end tableware and serving pieces
- **Artistic Sculptures**: Detailed figurative work
- **Decorative Objects**: Vases, bowls for display
- **Jewelry**: Small, detailed pieces
- **Lighting**: Translucent lamp shades and light fixtures

**Working Properties**:
- Requires excellent technique and experience
- Memory clay - remembers every touch
- Prone to warping and cracking during drying
- Accepts glazes beautifully, especially crystalline glazes

**4. Fire Clay: The Specialist**

**Technical Specifications**:
- **Firing Temperature**: 1300°C - 1500°C (2372°F - 2732°F)
- **Maturation Cone**: 12-18
- **Shrinkage Rate**: 4-6% total shrinkage
- **Absorption Rate**: 5-10% after firing
- **Refractory Properties**: Withstands extreme temperature changes

**Physical Characteristics**:
- Highly refractory (heat resistant)
- Excellent thermal shock resistance
- Usually light colored (buff to gray)
- Lower plasticity than other clays
- Contains fewer fluxing materials

**Best Applications**:
- **Kiln Furniture**: Shelves, posts, and supports
- **Industrial Applications**: Furnace linings, crucibles
- **Raku Pottery**: Withstands thermal shock of raku process
- **Sculpture**: Large pieces requiring thermal stability
- **Architectural Elements**: Fire-resistant installations

**5. Ball Clay: The Modifier**

**Technical Specifications**:
- **Firing Temperature**: Variable (used as additive)
- **Plasticity**: Extremely high
- **Color**: Light gray to cream
- **Fine Particle Size**: Increases plasticity in clay bodies

**Primary Use**:
Ball clays are rarely used alone but are essential additives:
- Increase plasticity in clay bodies
- Improve workability
- Add strength to unfired clay
- Typical addition: 10-25% of clay body

**Regional Clay Variations**

**American Clays**:
- **Albany Slip**: Historic glaze clay from New York
- **Redart**: Popular red earthenware clay
- **Hawthorn Bond**: Fire clay from Missouri
- **Cedar Heights Goldart**: Versatile stoneware clay

**International Clays**:
- **English China Clay**: High-quality kaolin
- **French Limoges Clay**: Fine porcelain clay
- **German Westerwald Clay**: Traditional salt-glaze clay
- **Japanese Shigaraki Clay**: Distinctive textured clay

**Clay Body Formulation**

**Understanding Clay Recipes**:
Professional ceramicists often blend clays to achieve specific properties:

**Basic Stoneware Recipe**:
- 40% Fire Clay (structure and strength)
- 30% Ball Clay (plasticity)
- 20% Feldspar (flux for vitrification)
- 10% Silica Sand (reduce shrinkage)

**Porcelain Recipe**:
- 50% Kaolin (whiteness and structure)
- 25% Ball Clay (plasticity)
- 25% Feldspar (flux)

**Earthenware Recipe**:
- 60% Red Clay (base)
- 20% Ball Clay (plasticity)
- 10% Sand (reduce shrinkage)
- 10% Grog (texture and strength)

**Testing Clay Bodies**

**Essential Tests for New Clays**:

**1. Plasticity Test**:
- Roll coil and bend into circle
- Note cracking or breaking points
- Test throwing properties on wheel

**2. Drying Test**:
- Make test tiles of various thicknesses
- Monitor for cracking during drying
- Note warping tendencies

**3. Firing Test**:
- Fire at several temperature ranges
- Test absorption rates at each temperature
- Note color changes and maturation points

**4. Glaze Compatibility**:
- Apply standard glazes to test pieces
- Fire and evaluate fit, color response
- Test for crawling or other defects

**5. Thermal Shock Test**:
- Subject fired pieces to rapid temperature changes
- Evaluate crack resistance
- Important for functional pottery

**Clay Preparation and Modification**

**Aging Process**:
Aged clay performs better than fresh clay:
- Store clay in plastic for weeks or months
- Beneficial bacteria improve plasticity
- Moisture equalizes throughout clay body
- Professional potters age clay for years

**Adding Modifiers**:

**Grog**: Fired clay particles
- Reduces shrinkage and thermal shock
- Adds texture and strength
- Use 10-30% depending on application

**Sand**: Silica sand or fire sand
- Reduces plasticity and shrinkage
- Improves drying properties
- Opens clay body texture

**Paper Pulp**: Cellulose fiber
- Creates lightweight, strong bodies
- Burns out during firing
- Excellent for large sculptures

**Chamotte**: Pre-fired clay aggregate
- Similar to grog but larger particles
- Reduces thermal shock
- Traditional in European ceramics

**Environmental and Sustainability Considerations**

**Local Clay Sources**:
- Reduces transportation environmental impact
- Connects you to local geological history
- Often less expensive than commercial clays
- May require more processing and testing

**Clay Recycling**:
- Reclaim all clay scraps and trimmings
- Slake down leather-hard clay
- Screen out foreign materials
- Re-wedge thoroughly before use

**Sustainable Practices**:
- Use local materials when possible
- Minimize waste through careful planning
- Share clay resources with other artists
- Consider environmental impact of mining

**Troubleshooting Common Clay Problems**

**Cracking During Drying**:
- Clay drying too quickly
- Uneven wall thickness
- Poor clay preparation
- Solution: Slow drying, even construction

**Warping**:
- Uneven moisture loss
- Poor clay body formulation
- Inadequate support during drying
- Solution: Better construction techniques, slower drying

**Poor Plasticity**:
- Clay not aged sufficiently
- Wrong clay type for application
- Contamination with foreign materials
- Solution: Age clay longer, test different formulations

**Firing Cracks**:
- Thermal shock during heating/cooling
- Clay body not suitable for firing temperature
- Uneven heating in kiln
- Solution: Adjust firing schedule, test clay body

**Advanced Clay Body Development**

**Custom Formulations**:
As you advance, you may want to develop your own clay bodies:
- Start with proven recipes
- Make small test batches
- Change only one variable at a time
- Keep detailed records of modifications
- Test thoroughly before committing to large batches

**Computer Modeling**:
Modern ceramics software can help predict clay behavior:
- Calculate thermal expansion coefficients
- Predict firing behavior
- Optimize clay body recipes
- Reduce testing time and materials

**Understanding clay types and their applications is fundamental to ceramic success. Each clay has its own personality, challenges, and rewards. The key is matching the right clay to your specific project requirements while understanding how to modify and adapt clays to meet your artistic vision.**

**Remember: The best clay is the one that allows you to realize your creative goals while providing consistent, predictable results. Start with well-tested commercial clays, learn their properties thoroughly, and gradually experiment with modifications as your experience grows.**`,
    image: "/claytypes.jpg",
    category: "Guide", 
    date: "December 8, 2024",
    readTime: "20 min read"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-cream/30">
        <Header />
        
        {/* Blog Post Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button 
                onClick={() => setSelectedPost(null)}
                variant="outline"
                className="mb-8 border-clay-brown text-clay-brown hover:bg-clay-brown hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
              
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <div className="relative">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-terracotta text-white">{selectedPost.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-clay-brown mb-4">
                    {selectedPost.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {selectedPost.content}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream/30">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-clay-brown to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Artistic Insights
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover techniques, tips, and inspiration from our community of artists and craftspeople
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card 
            className="max-w-4xl mx-auto mb-16 overflow-hidden border-0 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelectedPost(blogPosts[0])}
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="bg-terracotta text-white mb-4">Featured</Badge>
                <h2 className="font-display text-3xl font-bold text-clay-brown mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                  <Badge variant="outline">{blogPosts[0].category}</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-white/80 backdrop-blur-sm cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sage-green text-white">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-terracotta transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
