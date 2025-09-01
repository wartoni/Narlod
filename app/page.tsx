import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { X, MessageCircle } from "lucide-react"

export default function NarlodHomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/narlod-head.png" alt="Narlod" className="w-10 h-10" />
              <span className="text-xl font-black">NARLOD</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#buy" className="text-sm font-medium hover:text-primary transition-colors">
                How to Buy
              </a>
              <a href="#tokenomics" className="text-sm font-medium hover:text-primary transition-colors">
                Tokenomics
              </a>
              <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors">
                Roadmap
              </a>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Buy NARLOD
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="sky-background relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Cloud decorations */}
        <div className="absolute top-20 left-10 w-32 h-20 cloud-decoration rounded-full opacity-80"></div>
        <div className="absolute top-32 right-20 w-24 h-16 cloud-decoration rounded-full opacity-70"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-18 cloud-decoration rounded-full opacity-60"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-12 cloud-decoration rounded-full opacity-75"></div>

        {/* Floating coins */}
        <div className="absolute top-1/3 left-1/4 text-6xl floating-animation">🪙</div>
        <div className="absolute top-1/2 right-1/4 text-4xl floating-animation" style={{ animationDelay: "1s" }}>
          💰
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-5xl floating-animation" style={{ animationDelay: "2s" }}>
          🎯
        </div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="mb-8">
            <div className="mb-4 bounce-animation">
              <img src="/images/narlod-crossed-arms.png" alt="Narlod character" className="w-32 h-32 mx-auto" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-balance">NARLOD</h1>
            <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">Join the Movement – Make Narlod a Meme!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4">
                Buy NARLOD
              </Button>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://t.me/narlodonbase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={32} />
              </a>
              <a
                href="https://x.com/narlodonbase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <X size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img src="/images/narlod-crossed-arms-alt.png" alt="Narlod head" className="w-24 h-24" />
              </div>
              <h2 className="text-4xl font-black mb-6 text-balance">ABOUT NARLOD</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Meet Narlod – the meme that isn't quite a meme… yet. He dreams big, aiming to stand shoulder to shoulder
                with legends like Pepe, Wojak, and the rest of the internet's finest. Born in the chaotic corners of
                4chan, Narlod has meme DNA running through his veins — he just needs your help to rise.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                He's weird, he's lovable, he's got that unexplainable meme potential. All he needs now is you.
              </p>
              <p className="text-lg mb-6 leading-relaxed font-semibold">
                Join the journey. Spread the word. Make Narlod a meme.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  🐸 Meme Legend Aspirant
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  🌐 4chan Born
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  💫 Meme Potential
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-card border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <img src="/images/narlod-pointing.png" alt="Narlod pointing" className="w-32 h-32 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Help Narlod Rise</h3>
                  <p className="text-muted-foreground">
                    Be part of the movement to make Narlod the next legendary internet meme alongside Pepe and Wojak!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="buy" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-balance">HOW TO BUY</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Get a Crypto Wallet",
                icon: "👛",
                description: "Download MetaMask or your preferred wallet",
              },
              { step: "2", title: "Buy ETH", icon: "💳", description: "Purchase Ethereum from an exchange" },
              {
                step: "3",
                title: "Connect Your Wallet",
                icon: "🔗",
                description: "Connect to a decentralized exchange",
              },
              { step: "4", title: "Swap for NARLOD", icon: "🔄", description: "Exchange your ETH for NARLOD tokens" },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg">Step {item.step}</CardTitle>
                  <CardDescription className="font-semibold">{item.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-balance">TOKENOMICS</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span className="text-3xl">📊</span>
                    Token Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">Liquidity Pool</span>
                    <Badge variant="outline">40%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">Community Rewards</span>
                    <Badge variant="outline">30%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">Marketing</span>
                    <Badge variant="outline">20%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">Team</span>
                    <Badge variant="outline">10%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <img src="/images/narlod-facepalm.png" alt="Narlod facepalm" className="w-32 h-32 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Total Supply</h3>
              <p className="text-4xl font-black text-primary mb-6">1,000,000,000</p>
              <p className="text-lg text-muted-foreground">
                NARLOD tokens with deflationary mechanics and community governance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-balance">ROAD MAP</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Launch & Community Building",
                  icon: "🚀",
                  items: ["Token Launch", "Community Growth", "Social Media Presence"],
                },
                {
                  phase: "Phase 2",
                  title: "Exchange Listings",
                  icon: "📈",
                  items: ["DEX Listings", "CoinGecko & CMC", "Influencer Partnerships"],
                },
                {
                  phase: "Phase 3",
                  title: "Utility Development",
                  icon: "🛠️",
                  items: ["NFT Collection", "Staking Platform", "Mobile App"],
                },
                {
                  phase: "Phase 4",
                  title: "Global Expansion",
                  icon: "🌍",
                  items: ["CEX Listings", "International Marketing", "Ecosystem Growth"],
                },
              ].map((phase, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{phase.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <CardDescription className="text-lg font-semibold">{phase.title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <img src="/images/narlod-crossed-arms.png" alt="Narlod crossed arms" className="w-24 h-24 mx-auto" />
            </div>
            <h2 className="text-4xl font-black text-balance">FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">What is NARLOD?</AccordionTrigger>
                <AccordionContent>
                  Narlod is a character born from 4chan who dreams of becoming a legendary meme like Pepe and Wojak.
                  He's got meme DNA but needs the community's help to rise to internet fame.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">How can I buy NARLOD tokens?</AccordionTrigger>
                <AccordionContent>
                  You can buy NARLOD tokens through decentralized exchanges by connecting your crypto wallet and
                  swapping ETH for NARLOD tokens.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">What makes NARLOD different?</AccordionTrigger>
                <AccordionContent>
                  Narlod has that unexplainable meme potential and authentic 4chan origins. He's weird, lovable, and
                  ready to join the ranks of internet's finest memes with your help.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">Is NARLOD safe to invest in?</AccordionTrigger>
                <AccordionContent>
                  Like all cryptocurrencies, NARLOD carries investment risks. Always do your own research and never
                  invest more than you can afford to lose.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">How can I join the community?</AccordionTrigger>
                <AccordionContent>
                  Join our community through our official social media channels, Discord server, and Telegram group to
                  stay updated with the latest news and developments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sky-background py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <img src="/images/narlod-crossed-arms-alt.png" alt="Narlod" className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold mb-4">NARLOD</h3>
          <p className="text-sm opacity-60">© 2025 NARLOD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
